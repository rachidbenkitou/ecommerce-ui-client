import {Routes} from "@angular/router";
import {CartComponent} from "./components/cart/cart.component";
import {SaleContactFormComponent} from "./components/sale-contact-form/sale-contact-form.component";


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
  {
    path: 'saleContactForm',
    component: SaleContactFormComponent,
    // canActivate: [AuthGuard],
    // data: {roles: ['client_admin']},

  },
];
