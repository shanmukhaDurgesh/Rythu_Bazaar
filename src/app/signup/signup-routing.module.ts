import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CommonSharedModule } from '../common-shared/common-shared.module';


const routes: Routes = [
  {
    path: '', component: SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonSharedModule],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
