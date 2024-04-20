import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CategoriesPageComponent} from './components/categories-page/categories-page.component';
import {CategoriesRoutes} from "./categories-routing.module";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    CategoriesPageComponent],
  exports: [],
  imports: [
    RouterModule.forChild(CategoriesRoutes),
    CommonModule,
    SharedModule
  ]
})
export class CategoriesModule {
}
