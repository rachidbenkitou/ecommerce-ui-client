import {NgModule} from "@angular/core";
import {LayoutComponent} from "./components/layout.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    LayoutComponent
  ],
  exports: [
  ],
  imports: [SharedModule]
})

export class LayoutModule {
}
