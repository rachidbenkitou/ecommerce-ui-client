import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {PackageRoute} from "./packages-routing.module";
import {PackageListComponent} from "./components/package-list/package-list.component";

@NgModule({
  declarations: [
    PackageListComponent
  ],
  imports: [
    RouterModule.forRoot(PackageRoute)
  ],
  exports: [
    PackageListComponent
  ]
})
export class PackageModule {
}
