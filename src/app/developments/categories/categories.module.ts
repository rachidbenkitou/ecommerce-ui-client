import {NgModule} from "@angular/core";
import {CategoriesListComponent} from './components/categories-list/categories-list.component';
import {CommonModule} from "@angular/common";
import {CategoriesPageComponent} from './components/categories-page/categories-page.component';
import {CategoriesRoutes} from "./categories-routing.module";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    CategoriesPageComponent,
    CategoriesListComponent
  ],
  exports: [
    CategoriesListComponent
  ],
  imports: [
    RouterModule.forChild(CategoriesRoutes),
    CommonModule,
  ]
})
export class CategoriesModule {
}
