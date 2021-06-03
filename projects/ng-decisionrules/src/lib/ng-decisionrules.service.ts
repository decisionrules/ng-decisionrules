import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {InputData} from './models/inputData';
import {DECISIONRULES_CONFIG} from './ng-decisionrules.module';
import {DecisionrulesAuth} from './models/decisionrulesAuth';

@Injectable({
  providedIn: 'root'
})
export class NgDecisionrulesService<T = any> {
  constructor(@Inject(DECISIONRULES_CONFIG) private config: DecisionrulesAuth, private http: HttpClient) {
  }


  private apiUrl = 'api.decisionrules.io';

  public solveRule(inputData: T, ruleId: string, geoloc="eu1", version?: number): Promise<T> {
    let url;
    if (version) {
      url = `http://${geoloc}.${(this.apiUrl)}/rule/solve/${ruleId}/${version}`;
    } else {
      url = `http://${geoloc}.${(this.apiUrl)}/rule/solve/${ruleId}/`;
    }
    const data: InputData = {
      data: JSON.parse(JSON.stringify(inputData))
    };
    const headers = {Authorization: `Bearer ${this.config.token}`, 'Content-Type': 'application/json'};
    try {
      return this.http.post<T>(url, data, {headers}).toPromise();
    } catch (e) {
      throw e;
    }
  }
}
