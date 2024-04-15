import {NgModule} from "@angular/core";
import {BreadcrumbComponent} from './components/breadcrumb/breadcrumb.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {DealsComponent} from './components/landing-page/deals/deals.component';
import {SlideComponent} from './components/landing-page/slide/slide.component';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    BreadcrumbComponent,
    NotFoundComponent,
    DealsComponent,
    SlideComponent,
  ],
  exports: [
    BreadcrumbComponent,
    DealsComponent,
    SlideComponent,
    CommonModule
  ],
  imports: []
})

export class SharedModule {
}
