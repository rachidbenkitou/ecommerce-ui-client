import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CartRoutes} from "./cart-routing.module";
import { CartComponent } from './components/cart/cart.component';
import {BreadcrumbModule} from "../shared/components/breadcrumb/breadcrumb.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    CartComponent
  ],
  exports: [],
  imports: [
    RouterModule.forChild(CartRoutes),
    BreadcrumbModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CartModule {
}
