import {Routes} from "@angular/router";
import {ProductLandingPageComponent} from "./components/product-landing-page/product-landing-page.component";

export const ProductsRoutes: Routes = [
  {
    path: '',
    redirectTo: 'landingPage',
    pathMatch: 'full'
  },
  {
    path: 'landingPage',
    component: ProductLandingPageComponent,
  },

];
