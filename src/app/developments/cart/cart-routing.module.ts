import {Routes} from "@angular/router";
import {CartComponent} from "./components/cart/cart.component";


export const CartRoutes: Routes = [
  // {
  //   path: '',
  //   component: CheckoutComponent,
  //   children: [],
  // },

  {
    path: '',
    component: CartComponent,
    // canActivate: [AuthGuard],
    // data: {roles: ['client_admin']},

  },
];
