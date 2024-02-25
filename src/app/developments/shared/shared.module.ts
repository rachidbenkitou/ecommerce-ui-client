import {NgModule} from "@angular/core";
import {BreadcrumbComponent} from './components/breadcrumb/breadcrumb.component';
import {NavbarComponent} from "./components/navbar/components/navbar.component";
import {FooterComponent} from "./components/footer/components/footer.component";

@NgModule({
  declarations: [
    BreadcrumbComponent,
    NavbarComponent,
    FooterComponent
  ],
  exports: [
    BreadcrumbComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: []
})

export class SharedModule {
}
