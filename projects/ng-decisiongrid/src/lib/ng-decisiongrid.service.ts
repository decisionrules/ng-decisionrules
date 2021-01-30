import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {InputData} from './models/inputData';
import {DECISIONGRID_CONFIG} from './ng-decisiongrid.module';
import {DecisiongridAuth} from './models/decisiongridAuth';

@Injectable({
  providedIn: 'root'
})
export class NgDecisiongridService<T = any> {
  constructor(@Inject(DECISIONGRID_CONFIG) private config: DecisiongridAuth, private http: HttpClient) {
  }


  private apiUrl = 'http://api.decisiongrid.io';

  public solveRule(inputData: T, ruleId: string, version?: number): Promise<T> {
    let url;
    if (version) {
      url = `${(this.apiUrl)}/rule/solve/${ruleId}/${version}`;
    } else {
      url = `${(this.apiUrl)}/rule/solve/${ruleId}/`;
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
