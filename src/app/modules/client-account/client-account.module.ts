import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ClientAccountRoutes} from "./client-acount-routing.module";
import {ClientAccountComponent} from "./components/client-account.component";
import {BreadcrumbModule} from "../shared/components/breadcrumb/breadcrumb.module";

@NgModule({
  declarations: [
    ClientAccountComponent
  ],
  exports: [],
  imports: [
    RouterModule.forChild(ClientAccountRoutes),
    BreadcrumbModule,

  ]
})
export class ClientAccountModule {
}
