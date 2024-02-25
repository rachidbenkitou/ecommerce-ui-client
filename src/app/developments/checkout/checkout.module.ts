import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CheckoutRoutes} from "./checkout-routing.module";
import { CheckoutComponent } from './components/checkout/checkout.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    CheckoutComponent
  ],
  exports: [],
    imports: [
        RouterModule.forChild(CheckoutRoutes),
        SharedModule,
    ]
})
export class CheckoutModule {
}
