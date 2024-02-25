import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {WishlistRoutes} from "./wishlist-routing.module";
import { WishlistComponent } from './components/wishlist/wishlist.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [

    WishlistComponent
  ],
  exports: [],
    imports: [
        RouterModule.forChild(WishlistRoutes),
        SharedModule,
    ]
})
export class ProductPageModule {
}
