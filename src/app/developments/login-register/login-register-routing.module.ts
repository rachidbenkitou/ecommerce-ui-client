import {Routes} from "@angular/router";
import {LoginRegisterComponent} from "./components/login-register/login-register.component";

export const LoginRegisterRoutes: Routes = [
  // {
  //   path: '',
  //   component: CheckoutComponent,
  //   children: [],
  // },


  {
    path:'',
    component: LoginRegisterComponent,
  },
];
