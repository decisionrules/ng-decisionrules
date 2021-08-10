# ng-decisionrules
A simple Angular library that allows you to easily connect to [Decisionrules.io](https://decisionrules.io) from your web application.


## Manual Installation

### 1. Installation
Install Decisionrules packages through [npm](https://www.npmjs.com/package/@decisionrules/ng-decisionrules):
````shell
npm install @decisionrules/ng-decisionrules
````
### 2. Generate API key
You can create your `API key` here: https://app.decisionrules.io/api-keys

### 3. Setup Angular Modules
Import the `NgDecisionrulesModule` into your Angular application's module `AppModule`. Your application's main module might look like this:

_app.module.ts_

````typescript
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgDecisionrulesModule} from 'ng-decisionrules';
import {CustomDomainModel, ProtocolEnum} from "./customDomainModel";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgDecisionrulesModule.forRoot({
      auth: {token: 'YOUR_API_KEY_HERE'},
      geoloc: {geoloc: 'PREFERED_GEOLOC_HERE'} // GEOLOC KEY-PAIR IS OPTIONAL - DEFAULT IS EU1 (Ireland)
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
````

#### 3.1 Custom domain init

If you are using custom domain you want to add CustomDomainModel to the NgDecisionrulesModule.forRoot

Object CustomDomainModel takes string domain name and ProtocolEnum enum value as mandatory params.

```typescript
customDomain: new CustomDomainModel("your.domain.com", ProtocolEnum.HTTPS);
```


### 4. Solve rule
You can create rule on [Decisionrules dashboard](https://app.decisionrules.io)

_app.component.ts_

````typescript
import {SolverStrategyEnum} from "./solverStrategyEnum";

export class AppComponent implements OnInit {

  constructor(private decisionrulesService: NgDecisionrulesService) {
  }

  ngOnInit(): void {
    const inputData = {
      client: {
        age: 18
      }
    };
    this.decisionrulesService.solveRule(inputData, 'YOUR_RULE_ID', SolverStrategyEnum).then(data => {
      console.log(data);
    });
  }
}
````
