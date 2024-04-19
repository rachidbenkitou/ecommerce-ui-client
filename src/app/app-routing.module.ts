import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from "./developments/shared/components/not-found/not-found.component";
import {LayoutComponent} from "./developments/layout/components/layout/layout.component";


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,

    children: [
      {path: '', redirectTo: 'products', pathMatch: 'full'},

      {
        path: 'products',
        loadChildren: () => import('./developments/products/products.module').then(m => m.ProductsModule)
      },
      {
        // canActivate: [AuthGuard],
        // data: {roles: ['client_admin']},
        path: 'packages',
        loadChildren: () => import('./developments/packages/packages.module').then(m => m.PackageModule)
      },
      {
        path: 'categories',
        loadChildren: () => import('./developments/categories/categories.module').then(m => m.CategoriesModule)
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
      {
        path: 'wishlist',
        // canActivate: [AuthGuard],
        loadChildren: () => import('./developments/wishlist/wishlist.module').then(m => m.WishlistModule)
      },
      {
        path: 'profile',
        // canActivate: [AuthGuard],
        loadChildren: () => import('./developments/client-account/client-account.module').then(m => m.ClientAccountModule)
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
