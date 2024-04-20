import {Routes} from "@angular/router";
import {ProductLandingPageComponent} from "./components/product-landing-page/product-landing-page.component";
import {ProductsPageComponent} from "./components/products-page/products-page.component";
import {ProductPageComponent} from "./components/product-page/product-page.component";

export const ProductsRoutes: Routes = [
  {
    path: '',
    redirectTo: 'homePage',
    pathMatch: 'full'
  },
  {
    path: 'homePage',
    component: ProductLandingPageComponent,
  },
  {
    path: 'allProducts',
    component: ProductsPageComponent,
  },
  {
    path: 'singleProduct/:id',
    component: ProductPageComponent,
  },
];
