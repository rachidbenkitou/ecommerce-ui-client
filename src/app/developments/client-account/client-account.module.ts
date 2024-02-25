import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ClientAccountRoutes} from "./client-acount-routing.module";
import { ClientAccountComponent } from './components/client-account/client-account.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    ClientAccountComponent
  ],
  exports: [],
    imports: [
        RouterModule.forChild(ClientAccountRoutes),
        SharedModule,
    ]
})
export class ClientAccountModule {
}
