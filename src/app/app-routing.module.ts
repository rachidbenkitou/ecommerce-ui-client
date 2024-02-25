import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from "./developments/shared/components/not-found/not-found.component";
import {LayoutComponent} from "./developments/layout/components/layout/layout.component";


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,

    children: [
      {path: '', redirectTo: '/products', pathMatch: 'full'},

      {
        path: 'products',
        loadChildren: () => import('./developments/products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'loginRegister',
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
