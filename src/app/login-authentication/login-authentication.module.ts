import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginAuthenticationRoutingModule } from './login-authentication-routing.module';
import { LoginAuthenticationComponent } from './login-authentication/login-authentication.component';
import { FormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CommonSharedModule } from '../common-shared/common-shared.module';


@NgModule({
  declarations: [LoginAuthenticationComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    LoginAuthenticationRoutingModule,
    FormsModule,
    CommonSharedModule
  ]
})
export class LoginAuthenticationModule { }
