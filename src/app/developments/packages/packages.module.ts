import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {PackageRoute} from "./packages-routing.module";
import {PackageListComponent} from "./components/package-list/package-list.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    PackageListComponent,
  ],
  imports: [
    RouterModule.forChild(PackageRoute),
    CommonModule
  ],
  exports: [PackageListComponent]
})
export class PackageModule {
}
