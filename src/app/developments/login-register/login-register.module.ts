import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {LoginRegisterRoutes} from "./login-register-routing.module";
import {LoginRegisterComponent} from "./components/login-register.component";

@NgModule({
  declarations: [
    LoginRegisterComponent
  ],
  exports: [],
  imports: [
    RouterModule.forChild(LoginRegisterRoutes),
  ]
})
export class ClientAccountModule {
}
