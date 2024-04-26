import {NgModule} from "@angular/core";
import {BreadcrumbComponent} from './components/breadcrumb/breadcrumb.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {DealsComponent} from './components/landing-page/deals/deals.component';
import {SlideComponent} from './components/landing-page/slide/slide.component';
import {CommonModule} from "@angular/common";
import {AlertComponent} from './components/alert/alert.component';
import {CategoriesListComponent} from "./components/categories-list/categories-list.component";
import { SkeletonComponent } from './components/skeleton/skeleton.component';

@NgModule({
  declarations: [
    BreadcrumbComponent,
    NotFoundComponent,
    DealsComponent,
    SlideComponent,
    AlertComponent,
    CategoriesListComponent,
    SkeletonComponent
  ],
    exports: [
        BreadcrumbComponent,
        DealsComponent,
        SlideComponent,
        CommonModule,
        AlertComponent,
        CategoriesListComponent,
        SkeletonComponent
    ],
  imports: [
    CommonModule
  ]
})

export class SharedModule {
}
