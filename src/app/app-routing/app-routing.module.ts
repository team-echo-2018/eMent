import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { LoginPageComponent } from '../views/platform/pages/login-page/login-page.component';
import { SignupPageComponent } from '../views/platform/pages/signup-page/signup-page.component';
import { HomePageComponent } from '../views/platform/pages/home-page/home-page.component';
import { RegSelectorPageComponent } from '../views/platform/pages/reg-selector-page/reg-selector-page.component';
import { ProjectsPageComponent } from '../views/platform/pages/projects-page/projects-page.component';
import { MessagingPageComponent } from '../views/platform/pages/messaging-page/messaging-page.component';
import { FeaturesPageComponent } from '../views/platform/pages/features-page/features-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginPageComponent },
  { path: 'sign-up', component: SignupPageComponent},
  { path: 'reg-selector', component: RegSelectorPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'messaging', component: MessagingPageComponent },
  { path: 'features', component: FeaturesPageComponent }
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule],
  declarations: []
})
export class AppRoutingModule { }
