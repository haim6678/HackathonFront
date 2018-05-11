import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {LogInComponent} from "./components/log-in/log-in.component";
import {PageNotFountComponent} from "./components/page-not-fount/page-not-fount.component";
import {DashboardMainPageComponent} from "./components/dashboard/dashboard-main-page/dashboard-main-page.component";
import {UploadContractComponent} from "./components/dashboard/upload-contract/upload-contract.component";

const appRoutes: Routes = [

  {path: 'not-found', component: PageNotFountComponent},
  {path: '', component: HomePageComponent, pathMatch: 'full'},
  {path: 'userCenter/:action', component: LogInComponent},
  {
    path: 'dashboard', component: DashboardMainPageComponent, children: [
    {path: 'upload', component: UploadContractComponent},
  ]
  },
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
