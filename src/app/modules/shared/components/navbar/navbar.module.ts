import {NgModule} from "@angular/core";
import {NavbarComponent} from "./components/navbar.component";

@NgModule({
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    // RouterModule.forChild(NavbarRoutes),

  ]
})
export class NavbarModule {
}
