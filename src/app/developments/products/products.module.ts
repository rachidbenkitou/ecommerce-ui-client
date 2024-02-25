import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ProductLandingPageComponent} from './components/product-landing-page/product-landing-page.component';
import {ProductPageComponent} from './components/product-page/product-page.component';
import {ProductsRoutes} from "./products-routing.module";
import { ProductListComponent } from './components/product-list/product-list.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    ProductLandingPageComponent,
    ProductPageComponent,
    ProductListComponent
  ],
  exports: [],
  imports: [
    RouterModule.forChild(ProductsRoutes),
    SharedModule,
  ]
})
export class ProductsModule {
}
