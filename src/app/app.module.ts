import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutComponent} from "./developments/layout/components/layout/layout.component";
import {HttpClientModule} from "@angular/common/http";
import {NavbarComponent} from "./developments/shared/components/navbar/navbar.component";
import {FooterComponent} from "./developments/shared/components/footer/footer.component";
import {provideToastr, ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule, provideAnimations} from "@angular/platform-browser/animations";
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080/',
        realm: 'ecommerce-service-realm',
        clientId: 'ecommerce-service-client'
      },
      initOptions: {
        onLoad: 'login-required',
        checkLoginIframe: true
      }
    });
}

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    KeycloakAngularModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    },
    provideClientHydration(),
    provideAnimations(), // required animations providers
    provideToastr(), provideAnimationsAsync(), // Toastr providers

  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

