import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {LoginRegisterRoutes} from "./login-register-routing.module";
import {LoginRegisterComponent} from "./components/login-register.component";
import {BreadcrumbModule} from "../shared/components/breadcrumb/breadcrumb.module";

@NgModule({
  declarations: [
    LoginRegisterComponent
  ],
  exports: [],
  imports: [
    RouterModule.forChild(LoginRegisterRoutes),
    BreadcrumbModule,

  ]
})
export class ClientAccountModule {
}
