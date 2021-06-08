import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {InputData} from './models/inputData';
import {DECISIONRULES_CONFIG} from './ng-decisionrules.module';
import { DecisionRulesConfig } from './models/DecisionrulesConfig';

@Injectable({
  providedIn: 'root'
})
export class NgDecisionrulesService<T = any> {
  constructor(@Inject(DECISIONRULES_CONFIG) private config: DecisionRulesConfig, private http: HttpClient) {
  }

  private apiUrl = this.endpointFactory(this.config.geoloc.geoloc);

  public solveRule(inputData: T, ruleId: string, version?: number): Promise<T> {
    let url: string;
    if (version) {
      url = `${(this.apiUrl)}/rule/solve/${ruleId}/${version}`;
    } else {
      url = `${(this.apiUrl)}/rule/solve/${ruleId}/`;
    }
    const data: InputData = {
      data: JSON.parse(JSON.stringify(inputData))
    };
    const headers = {Authorization: `Bearer ${this.config.auth.token}`, 'Content-Type': 'application/json'};
    try {
      return this.http.post<T>(url, data, {headers}).toPromise();
    } catch (e) {
      throw e;
    }
  }

  endpointFactory(geoloc: string): string {
    if(geoloc) {
      return `http://${geoloc}.api.decisionrules.io`;
    } else {
      return 'http://api.decisionrules.io';
    }
  }
}
