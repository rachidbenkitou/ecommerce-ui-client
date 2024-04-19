import {Routes} from "@angular/router";
import {ClientAccountComponent} from "./components/client-account/client-account.component";
import {DashboardComponent} from "./components/profile-options/dashboard/dashboard.component";
import {UpdateProfileComponent} from "./components/profile-options/update-profile/update-profile.component";
import {ShippingAdressComponent} from "./components/profile-options/shipping-adress/shipping-adress.component";
import {ChangePasswordComponent} from "./components/profile-options/change-password/change-password.component";
import {OrdersComponent} from "./components/profile-options/orders/orders.component";

export const ClientAccountRoutes: Routes = [
  {
    path: '',
    component: ClientAccountComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard', // This will load the DashboardComponent by default
        component: DashboardComponent,
        data: {
          'activeTab': 'dashboard'
        }
      },      {
        path: 'orders',
        component: OrdersComponent,
        data: {
          'activeTab': 'orders'
        }
      },
      {
        path: 'updateProfile',
        component: UpdateProfileComponent,
        data: {
          'activeTab': 'updateProfile'
        }
      },
      {
        path: 'shippingAddress',
        component: ShippingAdressComponent,
        data: {
          'activeTab': 'shippingAddress'
        }
      },
      {
        path: 'changePassword',
        component: ChangePasswordComponent,
        data: {
          'activeTab': 'changePassword'
        }
      }
    ]
  },
];
