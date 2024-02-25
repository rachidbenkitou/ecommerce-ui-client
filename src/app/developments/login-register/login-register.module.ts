import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {LoginRegisterRoutes} from "./login-register-routing.module";
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    LoginRegisterComponent
  ],
  exports: [],
  imports: [
    RouterModule.forChild(LoginRegisterRoutes),
    SharedModule,
  ]
})
export class LoginRegisterModule {
}
