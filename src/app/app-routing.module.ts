import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from "./developments/shared/components/not-found/not-found.component";
import {LayoutComponent} from "./developments/layout/components/layout/layout.component";
import {LoginRegisterModule} from "./developments/login-register/login-register.module";


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,

    children: [
      {path: '', redirectTo: '/products', pathMatch: 'full'},

      {
        // canActivate: [AuthGuard],
        // data: {roles: ['client_admin']},
        path: 'products',
        loadChildren: () => import('./developments/products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'loginRegister',
        loadChildren: () => import('./developments/login-register/login-register.module').then(m => m.LoginRegisterModule)
      },
      {
        path: 'cart',
        // canActivate: [AuthGuard],
        loadChildren: () => import('./developments/cart/cart.module').then(m => m.CartModule)
      },
      {
        path: 'loginRegister',
        // canActivate: [AuthGuard],
        loadChildren: () => import('./developments/login-register/login-register.module').then(m => m.LoginRegisterModule)
      },
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
