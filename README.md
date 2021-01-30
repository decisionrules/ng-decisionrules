# ng-decisiongrid
Connect easily your Angular project with [Decisiongrid.io](https://decisiongrid.io)


## Manual Installation

#### 1. Install Decisiongrid packages through npm:
````shell
npm install @decisiongrid/ng-decisiongrid
````
#### 2. Generate API key here (https://app.decisiongrid.io/api-keys)

#### 3. Import the ClarityModule into your Angular application's module. Your application's main module might look like this:
````typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgDecisiongridModule} from 'ng-decisiongrid';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgDecisiongridModule.forRoot({
      token: 'YOUR_API_KEY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
````



#### 4. Sove rule
````typescript
export class AppComponent implements OnInit {
  
  constructor(private decisiongridService: NgDecisiongridService) {
  }

  ngOnInit(): void {
    const inputData = {
      client: {
        age: 18
      }
    };
    this.decisiongridService.solveRule(inputData, 'YOUR_RULE_ID').then(data => {
      console.log(data);
    });
  }
}
````
