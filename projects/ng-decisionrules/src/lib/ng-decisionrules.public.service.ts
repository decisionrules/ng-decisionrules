import {Inject, Injectable} from '@angular/core';
import {DecisionRulesConfig} from './models/DecisionrulesConfig';
import {GeoLocEnum} from './enums/geoLocEnum';
import {HttpClient} from '@angular/common/http';
import {DECISIONRULES_CONFIG} from './ng-decisionrules.module';

@Injectable({
  providedIn: 'root'
})
export class NgDecisionrulesPublicService{
  constructor(@Inject(DECISIONRULES_CONFIG) private config: DecisionRulesConfig, private httpClient: HttpClient) {}

  private url = this.createUrl();
  private headers = {Authorization: `Bearer ${this.config.auth.managementToken}`, 'Content-Type': 'application/json'};

  private createUrl(): string{
    let url = `https://api.decisionrules.io/api`;

    if (this.config.customDomain) {
      const domain = this.config.customDomain;
      return `${domain.customDomainProtocol}://${domain.customDomainUrl}/api`;
    }

    if (this.config.geoLoc) {
      if (this.config.geoLoc.geoLoc !== GeoLocEnum.DEFAULT) {
        url = `https://${this.config.geoLoc.geoLoc}.api.decisionrules.io/api`;
      }
    }

    return url;
  }

  // Space calls
  public getRulesForSpace(spaceId: string): Promise<any>{
    const apiUrl = this.url + '/space/' + spaceId;
    try {
      return this.httpClient.get(apiUrl, {headers: this.headers}).toPromise();
    } catch {
      throw new Error('ERROR: Get rules for space call failed!');
    }
  }

  // Rule calls
  public getRuleById(ruleId: string): Promise<any> {
    const apiUrl = this.url + '/rule/' + ruleId;
    try {
      return this.httpClient.get(apiUrl, {headers: this.headers}).toPromise();
    } catch {
      throw new Error('ERROR: Get rule by rule id call failed!');
    }
  }

  public getRuleByIdAndVersion(ruleId: string, version: string | number): Promise<any> {
    const apiUrl = this.url + '/rule/' + ruleId + '/' + version.toString();
    try {
      return this.httpClient.get(apiUrl, {headers: this.headers}).toPromise();
    } catch {
      throw new Error('ERROR: Get rule by rule id and version call failed!');
    }
  }

  public updateRuleByIdAndVersion(ruleId: string, version: string | number, body: any): Promise<any> {
    const apiUrl = this.url + '/rule/' + ruleId + '/' + version.toString();
    try {
      return this.httpClient.put(apiUrl, body, {headers: this.headers}).toPromise();
    } catch {
      throw new Error('ERROR: Update rule by rule id and version call failed!');
    }
  }

  public deleteRuleByRuleIdAndVersion(ruleId: string, version: string |number): Promise<any> {
    const apiUrl = this.url + '/rule/' + ruleId + '/' + version.toString();
    try {
      return this.httpClient.delete(apiUrl, {headers: this.headers}).toPromise();
    } catch {
      throw new Error('ERROR: Delete rule by rule id and version call failed!');
    }
  }

  public createRuleForSpace(spaceId: string, body): Promise<any> {
    const apiUrl = this.url + '/rule/' + spaceId;
    try {
      return this.httpClient.post(apiUrl, body, {headers: this.headers}).toPromise();
    } catch {
      throw new Error('ERROR: Create rule for space call failed!');
    }
  }
}
