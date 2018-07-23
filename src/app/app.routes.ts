import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {SignupComponent} from './user/signup/signup.component';
import {UserComponent} from './user/user.component';
import {SigninComponent} from './user/signin/signin.component';
import {ModuleWithProviders} from '@angular/core';

export const appRoutes: Routes = [
  {
    path : 'home', component : HomePageComponent},
  {
    path : 'signup', component : SignupComponent},
  {
    path : 'signin', component : SigninComponent},
  {
    path : 'profile', component : UserComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
