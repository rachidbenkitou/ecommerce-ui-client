import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {LoginRegisterRoutes} from "./login-register-routing.module";
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import {SharedModule} from "../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    LoginRegisterComponent
  ],
  exports: [],
  imports: [
    RouterModule.forChild(LoginRegisterRoutes),
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class LoginRegisterModule {
}
