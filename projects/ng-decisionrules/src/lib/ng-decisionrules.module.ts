import {ModuleWithProviders, NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { DecisionRulesConfig } from './models/DecisionrulesConfig';


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  exports: []
})
export class NgDecisionrulesModule {
  public static forRoot(config: DecisionRulesConfig): ModuleWithProviders<NgDecisionrulesModule> {
    return {
      ngModule: NgDecisionrulesModule,
      providers: [{provide: DECISIONRULES_CONFIG, useValue: config}]
    };
  }
}
export const DECISIONRULES_CONFIG = 'DECISIONRULES_CONFIG';
