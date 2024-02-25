import {NgModule} from "@angular/core";
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    BreadcrumbComponent,
    NotFoundComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    BreadcrumbComponent
  ],
  imports: []
})

export class SharedModule {
}
