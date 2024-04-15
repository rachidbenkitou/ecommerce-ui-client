import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {WishlistRoutes} from "./wishlist-routing.module";
import { WishlistComponent } from './components/wishlist/wishlist.component';
import {SharedModule} from "../shared/shared.module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [

    WishlistComponent
  ],
  exports: [],
    imports: [
        RouterModule.forChild(WishlistRoutes),
        SharedModule,
      CommonModule

    ]
})
export class WishlistModule {
}
