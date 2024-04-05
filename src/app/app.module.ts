import {NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutComponent} from "./developments/layout/components/layout/layout.component";
import {HttpClientModule} from "@angular/common/http";
import {NavbarComponent} from "./developments/shared/components/navbar/navbar.component";
import {FooterComponent} from "./developments/shared/components/footer/footer.component";


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration()
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
