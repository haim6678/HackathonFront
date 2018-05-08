import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TestComponent} from './components/test/test.component';
import {Web3Service} from "./services/web3Service";

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [Web3Service],
  bootstrap: [AppComponent]
})
export class AppModule {
}
