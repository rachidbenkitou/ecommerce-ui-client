import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {PackageRoute} from "./packages-routing.module";
import {CommonModule} from "@angular/common";
import {PackagesPageComponent} from './components/packages-page/packages-page.component';
import {PackageListComponent} from "./components/package-list/package-list.component";
import { PackagePageComponent } from './components/package-page/package-page.component';
import {NgSelectModule} from "@ng-select/ng-select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    PackageListComponent,
    PackagesPageComponent,
    PackagePageComponent,
  ],
    imports: [
        RouterModule.forChild(PackageRoute),
        CommonModule,
        NgSelectModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule,
    ],
  // exports: [PackageListComponent]
})
export class PackageModule {
}
