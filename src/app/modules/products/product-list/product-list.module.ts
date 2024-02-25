import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ProductListRoutes} from "./product-list-routing.module";
import {ProductListComponent} from "./components/product-list.component";
import {BreadcrumbModule} from "../../shared/components/breadcrumb/breadcrumb.module";

@NgModule({
  declarations: [
    ProductListComponent
  ],
  exports: [],
  imports: [
    RouterModule.forChild(ProductListRoutes),
    BreadcrumbModule,

  ]
})
export class ProductListModule {
}
