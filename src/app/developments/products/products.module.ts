import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ProductLandingPageComponent} from './components/product-landing-page/product-landing-page.component';
import {ProductPageComponent} from './components/product-page/product-page.component';
import {ProductsRoutes} from "./products-routing.module";
import {ProductListComponent} from './components/product-list/product-list.component';
import {SharedModule} from "../shared/shared.module";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProductsPageComponent} from "./components/products-page/products-page.component";
import {NgSelectModule} from "@ng-select/ng-select";
import {
  ProductsPageByCategoryComponent
} from './components/products-page-by-category/products-page-by-category.component';
import {CategoriesListComponent} from "../categories/components/categories-list/categories-list.component";

@NgModule({
  declarations: [
    ProductLandingPageComponent,
    ProductPageComponent,
    ProductsPageComponent,
    ProductListComponent,
    ProductsPageByCategoryComponent,
    CategoriesListComponent
  ],
  exports: [ProductListComponent],
  imports: [
    RouterModule.forChild(ProductsRoutes),
    SharedModule,
    // CategoriesModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    // PackageModule,
  ]
})
export class ProductsModule {
}
