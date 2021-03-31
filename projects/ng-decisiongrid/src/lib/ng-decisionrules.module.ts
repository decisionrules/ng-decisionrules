import {ModuleWithProviders, NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {DecisionrulesAuth} from './models/decisionrulesAuth';


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  exports: []
})
export class NgDecisionrulesModule {
  public static forRoot(config: DecisionrulesAuth): ModuleWithProviders<NgDecisionrulesModule> {
    return {
      ngModule: NgDecisionrulesModule,
      providers: [{provide: DECISIONRULES_CONFIG, useValue: config}]
    };
  }
}
export const DECISIONRULES_CONFIG = 'DECISIONRULES_CONFIG';
