import {Routes} from "@angular/router";
import {CartComponent} from "./components/cart/cart.component";
import {CheckoutComponent} from "../checkout/components/checkout.component";

export const CartRoutes: Routes = [
  {
    path: '',
    component: CheckoutComponent,
    children: [],
  },
];
