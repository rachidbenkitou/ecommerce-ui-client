import {NgModule} from "@angular/core";
import {CategoriesListComponent} from './components/categories-list/categories-list.component';
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    CategoriesListComponent
  ],
  exports: [
    CategoriesListComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class CategoriesModule {
}
