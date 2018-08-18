import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { LoginPageComponent } from '../views/platform/pages/login-page/login-page.component';
import { SignupPageComponent } from '../views/platform/pages/signup-page/signup-page.component';
import { HomePageComponent } from '../views/platform/pages/home-page/home-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginPageComponent },
  { path: 'sign-up', component: SignupPageComponent},
  { path: 'home', component: HomePageComponent }
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule],
  declarations: []
})
export class AppRoutingModule { }
