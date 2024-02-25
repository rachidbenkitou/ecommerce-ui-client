import {Routes} from "@angular/router";
import {CartComponent} from "../cart/components/cart/cart.component";
import {CheckoutComponent} from "../checkout/components/checkout.component";

export const ClientAccountRoutes: Routes = [
  {
    path: '',
    component: CheckoutComponent,
    children: [],
  },
];
