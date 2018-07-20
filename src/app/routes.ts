import { Routes } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {SignupComponent} from './user/signup/signup.component';
import {UserComponent} from './user/user.component';
import {SigninComponent} from './user/signin/signin.component';

export const appRoutes: Routes = [
  {path : 'home', component : HomePageComponent},
  {path : 'signup', component : UserComponent, children : [{path: '', component: SignupComponent}]},
  {path : 'signin', component : UserComponent, children: [{path: '', component: SigninComponent}]},
];
