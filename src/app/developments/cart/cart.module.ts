import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CartRoutes} from "./cart-routing.module";
import {CartComponent} from './components/cart/cart.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    CartComponent
  ],
  exports: [],
  imports: [
    RouterModule.forChild(CartRoutes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CommonModule
  ]
})
export class CartModule {
}
