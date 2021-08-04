import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {InputData} from './models/inputData';
import {DECISIONRULES_CONFIG} from './ng-decisionrules.module';
import { DecisionRulesConfig } from './models/DecisionrulesConfig';
import {SolverStrategyEnum} from './enums/solverStrategyEnum';
import {GeoLocEnum} from './enums/geoLocEnum';

@Injectable({
  providedIn: 'root'
})
export class NgDecisionrulesService<T = any> {
  constructor(@Inject(DECISIONRULES_CONFIG) private config: DecisionRulesConfig, private http: HttpClient) {
  }

  private baseUrl = 'api.decisionrules.io';

  public solveRule(inputData: T, ruleId: string, solverStrategy: SolverStrategyEnum, version?: number): Promise<T> {

    const apiUrl = this.urlFactory(ruleId, version);

    const data: InputData = {
      data: JSON.parse(JSON.stringify(inputData))
    };
    const headers = {Authorization: `Bearer ${this.config.auth.token}`, 'Content-Type': 'application/json', 'X-Strategy': solverStrategy};
    try {
      return this.http.post<T>(apiUrl, data, {headers}).toPromise();
    } catch (e) {
      throw e;
    }
  }

  private urlFactory(ruleId: string, version?: number): string {
    let url;

    const config = this.config;

    if (config.customDomain) {
      url = `${config.customDomain.customDomainProtocol}://${config.customDomain.customDomainUrl}/rule/solve/`;
    } else {
      if (config.geoLoc.geoLoc === GeoLocEnum.DEFAULT) {
        url = `https://${this.baseUrl}/rule/solve/`;
      } else {
        url = `https://${config.geoLoc.geoLoc}.${this.baseUrl}/rule/solve/`;
      }
    }

    if (version != null) {
      url += ruleId;
    } else {
      url += `${ruleId}/${version}`;
    }

    return url;
  }

}
