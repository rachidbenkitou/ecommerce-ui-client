import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ClientAccountRoutes} from "./client-acount-routing.module";
import { ClientAccountComponent } from './components/client-account/client-account.component';
import {SharedModule} from "../shared/shared.module";
import { DashboardComponent } from './components/profile-options/dashboard/dashboard.component';
import { UpdateProfileComponent } from './components/profile-options/update-profile/update-profile.component';
import { ShippingAdressComponent } from './components/profile-options/shipping-adress/shipping-adress.component';
import { ChangePasswordComponent } from './components/profile-options/change-password/change-password.component';
import { OrdersComponent } from './components/profile-options/orders/orders.component';

@NgModule({
  declarations: [
    ClientAccountComponent,
    DashboardComponent,
    UpdateProfileComponent,
    ShippingAdressComponent,
    ChangePasswordComponent,
    OrdersComponent
  ],
  exports: [],
    imports: [
        RouterModule.forChild(ClientAccountRoutes),
        SharedModule,
    ]
})
export class ClientAccountModule {
}
