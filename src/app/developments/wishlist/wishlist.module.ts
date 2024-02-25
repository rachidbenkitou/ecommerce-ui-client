import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {WishlistRoutes} from "./wishlist-routing.module";
import {WishlistComponent} from "./components/wishlist.component";

@NgModule({
  declarations: [
    WishlistComponent
  ],
  exports: [],
  imports: [
    RouterModule.forChild(WishlistRoutes),
  ]
})
export class ProductPageModule {
}
