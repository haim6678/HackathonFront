import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {LogInComponent} from "./components/log-in/log-in.component";
import {PageNotFountComponent} from "./components/page-not-fount/page-not-fount.component";
import {DashboardMainPageComponent} from "./components/dashboard/dashboard-main-page/dashboard-main-page.component";
import {UploadContractComponent} from "./components/dashboard/upload-contract/upload-contract.component";
import {AboutUsComponent} from "./components/about-us/about-us.component";
import {MyContractsComponent} from "./components/dashboard/my-contracts/my-contracts.component";
import {AuthGuardService} from "./services/AuthGuardService";
import {UserContractHistoryComponent} from "./components/dashboard/user-contract-history/user-contract-history.component";

const appRoutes: Routes = [

  {path: 'not-found', component: PageNotFountComponent},
  {path: 'aboutUs', component: AboutUsComponent},
  {path: '', component: HomePageComponent, pathMatch: 'full'},
  {path: 'userCenter/:action', component: LogInComponent},
  {
    path: 'dashboard', component: DashboardMainPageComponent, canActivate: [AuthGuardService], children: [
    {path: 'upload', component: UploadContractComponent},
    {path: 'myContracts', component: MyContractsComponent},
    {path: 'history', component: UserContractHistoryComponent},
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
