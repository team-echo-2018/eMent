import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './views/platform/components/nav-bar/nav-bar.component';
import { NavItemComponent } from './views/platform/components/nav-item/nav-item.component';
import { HomePageComponent } from './views/platform/pages/home-page/home-page.component';
import { LoginPageComponent } from './views/platform/pages/login-page/login-page.component';
import { SignupPageComponent } from './views/platform/pages/signup-page/signup-page.component';
import { LogoSpanComponent } from './views/platform/components/logo-span/logo-span.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RegSelectorPageComponent } from './views/platform/pages/reg-selector-page/reg-selector-page.component';
import { ProjectsPageComponent } from './views/platform/pages/projects-page/projects-page.component';
import { HeaderComponent } from './views/platform/components/header/header.component';
import { MessagingPageComponent } from './views/platform/pages/messaging-page/messaging-page.component';
import { FeaturesPageComponent } from './views/platform/pages/features-page/features-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavItemComponent,
    HomePageComponent,
    LoginPageComponent,
    SignupPageComponent,
    LogoSpanComponent,
    RegSelectorPageComponent,
    ProjectsPageComponent,
    HeaderComponent,
    MessagingPageComponent,
    FeaturesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
