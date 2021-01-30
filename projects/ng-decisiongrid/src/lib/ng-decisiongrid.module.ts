import {ModuleWithProviders, NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {DecisiongridAuth} from './models/decisiongridAuth';


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  exports: []
})
export class NgDecisiongridModule {
  public static forRoot(config: DecisiongridAuth): ModuleWithProviders<NgDecisiongridModule> {
    return {
      ngModule: NgDecisiongridModule,
      providers: [{provide: DECISIONGRID_CONFIG, useValue: config}]
    };
  }
}
export const DECISIONGRID_CONFIG = 'DECISIONGRID_CONFIG';
