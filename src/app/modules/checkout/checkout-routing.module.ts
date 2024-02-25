import {Routes} from "@angular/router";
import {CartComponent} from "../cart/components/cart/cart.component";
import {CheckoutComponent} from "./components/checkout.component";

export const CheckoutRoutes: Routes = [
  {
    path: '',
    component: CheckoutComponent,
    children: [],
  },
];
