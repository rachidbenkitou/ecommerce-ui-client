import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ProductPageRoutes} from "./product-page-routing.module";
import {ProductPageComponent} from "./components/product-page.component";
import {BreadcrumbModule} from "../../shared/components/breadcrumb/breadcrumb.module";

@NgModule({
  declarations: [
    ProductPageComponent
  ],
  exports: [],
  imports: [
    RouterModule.forChild(ProductPageRoutes),
    BreadcrumbModule,

  ]
})
export class ProductPageModule {
}
