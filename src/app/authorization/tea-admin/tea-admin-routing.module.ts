import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { MBillingComponent } from './m-billing/m-billing.component';
import { MbillingTwoComponent } from './mbilling-two/mbilling-two.component';
import { MbillingThreeComponent } from './mbilling-three/mbilling-three.component';
import { MbilliFourComponent } from './mbilli-four/mbilli-four.component';


const routes: Routes = [
  {path: 'company', component: CompanyComponent},
  {path: 'mb', component: MBillingComponent},
  {path: 'mbilling', component: MbillingTwoComponent},
  {path: 'mbillingthree', component: MbillingThreeComponent},
  {path: 'mbillingfour', component: MbilliFourComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeaAdminRoutingModule { }
