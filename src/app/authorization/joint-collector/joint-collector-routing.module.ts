import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemandOrderApprovalsComponent } from './demand-order-approvals/demand-order-approvals.component';
import { LeaveApplicationApprovalsComponent } from './leave-application-approvals/leave-application-approvals.component';


const routes: Routes = [
  {path: 'demand-orders', component: DemandOrderApprovalsComponent},
  {path: 'leave-application', component: LeaveApplicationApprovalsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JointCollectorRoutingModule { }
