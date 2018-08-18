import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './views/platform/components/nav-bar/nav-bar.component';
import { NavItemComponent } from './views/platform/components/nav-item/nav-item.component';
import { HomePageComponent } from './views/platform/pages/home-page/home-page.component';
import { LoginPageComponent } from './views/platform/pages/login-page/login-page.component';
import { SignupPageComponent } from './views/platform/pages/signup-page/signup-page.component';
import { LogoSpanComponent } from './views/platform/components/logo-span/logo-span.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavItemComponent,
    HomePageComponent,
    LoginPageComponent,
    SignupPageComponent,
    LogoSpanComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
