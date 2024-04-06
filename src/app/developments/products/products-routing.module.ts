import {Routes} from "@angular/router";
import {ProductLandingPageComponent} from "./components/product-landing-page/product-landing-page.component";

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

];
