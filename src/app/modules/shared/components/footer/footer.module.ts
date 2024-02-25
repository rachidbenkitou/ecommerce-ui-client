import {NgModule} from "@angular/core";
import {FooterComponent} from "./components/footer.component";

@NgModule({
  declarations: [
    FooterComponent
  ],
  exports: [
    FooterComponent
  ],
  imports: [
    // RouterModule.forChild(FooterRoutes),

  ]
})
export class FooterModule {
}
