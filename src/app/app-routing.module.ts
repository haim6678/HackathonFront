import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {LogInComponent} from "./components/log-in/log-in.component";
import {PageNotFountComponent} from "./components/page-not-fount/page-not-fount.component";

const appRoutes: Routes = [

  {path: 'not-found', component: PageNotFountComponent},
  {path: '', component: HomePageComponent, pathMatch: 'full'},
  {path: 'logIn', component: LogInComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})


export class AppRoutingModule {
}
