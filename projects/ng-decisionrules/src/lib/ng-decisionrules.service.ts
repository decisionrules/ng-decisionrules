import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {InputData} from './models/inputData';
import {DECISIONRULES_CONFIG} from './ng-decisionrules.module';
import { DecisionRulesConfig } from './models/DecisionrulesConfig';
import {SolverStrategyEnum} from './enums/solverStrategyEnum';
import {SolverTypeEnum} from './enums/SolverTypeEnum';

@Injectable({
  providedIn: 'root'
})
export class NgDecisionrulesService<T = any> {
  constructor(@Inject(DECISIONRULES_CONFIG) private config: DecisionRulesConfig, private http: HttpClient) {
  }

  private baseUrl = 'https://api.decisionrules.io';

  // tslint:disable-next-line:max-line-length
  public solveRule(inputData: T, ruleId: string, solverStrategy: SolverStrategyEnum, version?: number): Promise<T> {

    const apiUrl = this.urlFactory(SolverTypeEnum.RULE, ruleId, version);

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

  public solveRuleFlow(inputData: T, ruleId: string, solverStrategy: SolverStrategyEnum, version?: number): Promise<T> {

    const apiUrl = this.urlFactory(SolverTypeEnum.RULE_FLOW, ruleId, version);

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

  private urlFactory(solverType: SolverTypeEnum, ruleId: string, version?: number |string): string {
    let url = `${this.baseUrl}/${solverType}/solve/${ruleId}`;

    if (this.config.customDomain) {
      const domain = this.config.customDomain;
      return `${domain.customDomainProtocol}://${domain.customDomainUrl}:${domain.customDomainPort}/${solverType}/solve/${ruleId}`;
    }

    if (version) {
      this.addVersion(url, version);
    }

    return url;

  }

  private addVersion(url: string, version: string | number): string{
    return url += `/${version.toString()}`;
  }

}
