import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './common-shared/guards/authentication.guard';


const routes: Routes = [
  { path: '', loadChildren: () => import('./authorization/authorization.module').then(m => m.AuthorizationModule), canActivate:[AuthenticationGuard] },
  { path: 'login', loadChildren: () => import('./login-authentication/login-authentication.module').then(m => m.LoginAuthenticationModule) },
  { path: 'signUp', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) },
  { path: 'pageNotFound', loadChildren: () => import('./access-forbidden/access-forbidden.module').then(m => m.AccessForbiddenModule) },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
