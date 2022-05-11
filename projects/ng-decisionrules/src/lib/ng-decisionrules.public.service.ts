import {Inject, Injectable} from '@angular/core';
import {DecisionRulesConfig} from './models/DecisionrulesConfig';
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
      return `${domain.customDomainProtocol}://${domain.customDomainUrl}:${domain.customDomainPort}/api`;
    }

    return url;
  }

  // Space calls
  public getItems(): Promise<any>{
    const apiUrl = this.url + '/space/';
    try {
      return this.httpClient.get(apiUrl, {headers: this.headers}).toPromise();
    } catch {
      throw new Error('ERROR: Get rules for space call failed!');
    }
  }

  // Rule calls
  public getRule(ruleId: string, version?: number | string): Promise<any> {
    let apiUrl = this.url + '/rule/' + ruleId;
    if (version) {
      apiUrl = this.url + '/rule/' + ruleId + '/' + version.toString();
    }
    try {
      return this.httpClient.get(apiUrl, {headers: this.headers}).toPromise();
    } catch {
      throw new Error('ERROR: Get rule by rule id call failed!');
    }
  }

  public updateRule(ruleId: string, version: string | number, body: any): Promise<any> {
    const apiUrl = this.url + '/rule/' + ruleId + '/' + version.toString();
    try {
      return this.httpClient.put(apiUrl, body, {headers: this.headers}).toPromise();
    } catch {
      throw new Error('ERROR: Update rule by rule id and version call failed!');
    }
  }

  public deleteRule(ruleId: string, version: string |number): Promise<any> {
    const apiUrl = this.url + '/rule/' + ruleId + '/' + version.toString();
    try {
      return this.httpClient.delete(apiUrl, {headers: this.headers}).toPromise();
    } catch {
      throw new Error('ERROR: Delete rule by rule id and version call failed!');
    }
  }

  public createRule(spaceId: string, body): Promise<any> {
    const apiUrl = this.url + '/rule/' + spaceId;
    try {
      return this.httpClient.post(apiUrl, body, {headers: this.headers}).toPromise();
    } catch {
      throw new Error('ERROR: Create rule for space call failed!');
    }
  }

  public getRuleFlow(ruleId: string, version?: number | string): Promise<any> {
    let apiUrl = this.url + '/rule-flow/' + ruleId;
    if (version) {
      apiUrl = this.url + '/rule-flow/' + ruleId + '/' + version.toString();
    }
    try {
      return this.httpClient.get(apiUrl, {headers: this.headers}).toPromise();
    } catch {
      throw new Error('ERROR: Get rule by rule id call failed!');
    }
  }

  public updateRuleFlow(ruleId: string, version: string | number, body: any): Promise<any> {
    const apiUrl = this.url + '/rule-flow/' + ruleId + '/' + version.toString();
    try {
      return this.httpClient.put(apiUrl, body, {headers: this.headers}).toPromise();
    } catch {
      throw new Error('ERROR: Update rule by rule id and version call failed!');
    }
  }

  public deleteRuleFlow(ruleId: string, version: string |number): Promise<any> {
    const apiUrl = this.url + '/rule-flow/' + ruleId + '/' + version.toString();
    try {
      return this.httpClient.delete(apiUrl, {headers: this.headers}).toPromise();
    } catch {
      throw new Error('ERROR: Delete rule by rule id and version call failed!');
    }
  }

  public createRuleFlow(body): Promise<any> {
    const apiUrl = this.url + '/rule-flow/';
    try {
      return this.httpClient.post(apiUrl, body, {headers: this.headers}).toPromise();
    } catch {
      throw new Error('ERROR: Create rule for space call failed!');
    }
  }

  public getSpaceItemsByTags(tags: string[]): Promise<any>{

    const tagsQuery = tags.join(",");

    const apiUrl = this.url + '/tags/items' + `?tags=${tagsQuery}`;
    try {
      return this.httpClient.get(apiUrl, {headers: this.headers}).toPromise();
    } catch {
      throw new Error('ERROR: Get rules for space call failed!');
    }
  }

  public updateTags(ruleId: string, body: any, version?: string | number): Promise<any> {
    const apiUrl = this.url + '/tags/' + ruleId + '/' + version.toString();

    if (version) {
      
    }

    try {
      return this.httpClient.put(apiUrl, body, {headers: this.headers}).toPromise();
    } catch {
      throw new Error('ERROR: Update rule by rule id and version call failed!');
    }
  }

  public deleteTags(itemId: string, tags: string[], version?: string | number): Promise<any> {
    const tagsQuery = tags.join(",");

    const apiUrl = this.url + '/tags/items' + `?tags=${tagsQuery}`;
    try {
      return this.httpClient.delete(apiUrl, {headers: this.headers}).toPromise();
    } catch {
      throw new Error('ERROR: Delete tags failed!');
    }
  }
}
