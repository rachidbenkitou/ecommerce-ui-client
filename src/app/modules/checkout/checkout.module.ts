import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CheckoutRoutes} from "./checkout-routing.module";
import {CheckoutComponent} from "./components/checkout.component";
import {BreadcrumbModule} from "../shared/components/breadcrumb/breadcrumb.module";

@NgModule({
  declarations: [
    CheckoutComponent
  ],
  exports: [
    CheckoutComponent
  ],
  imports: [
    RouterModule.forChild(CheckoutRoutes),
    BreadcrumbModule,

  ]
})
export class CheckoutModule {
}
