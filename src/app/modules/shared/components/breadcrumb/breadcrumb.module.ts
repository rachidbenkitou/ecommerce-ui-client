import {NgModule} from "@angular/core";
import {BreadcrumbComponent} from "./components/breadcrumb.component";

@NgModule({
  declarations: [
    BreadcrumbComponent
  ],
  exports: [
    BreadcrumbComponent
  ],
  imports: [
    // RouterModule.forChild(BreadcrumbRoutes),

  ]
})
export class BreadcrumbModule {
}
