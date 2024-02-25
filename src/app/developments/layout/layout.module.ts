import {NgModule} from "@angular/core";
import { LayoutComponent } from './components/layout/layout.component';
import {RouterOutlet} from "@angular/router";
import {SharedModule} from "../../modules/shared/shared.module";

@NgModule({
  declarations: [
    LayoutComponent
  ],
  exports: [],
  imports: [
    RouterOutlet,
    SharedModule
  ]
})

export class LayoutModule {
}
