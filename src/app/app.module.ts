import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {AppComponent} from './app.component';
import {TestComponent} from './components/test/test.component';
import {Web3Service} from "./services/web3Service";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NavigationBarComponent} from './components/navigation-bar/navigation-bar.component';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavigationBarComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [Web3Service],
  bootstrap: [AppComponent]
})
export class AppModule {
}
