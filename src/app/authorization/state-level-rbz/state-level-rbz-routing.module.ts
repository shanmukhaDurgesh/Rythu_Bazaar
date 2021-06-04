import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DistrictLevelDemandOrdersComponent } from './district-level-demand-orders/district-level-demand-orders.component';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';


const routes: Routes = [
  {path: 'district-level-demand-orders', component: DistrictLevelDemandOrdersComponent},
  {path: 'leave-application', component: LeaveApplicationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StateLevelRbzRoutingModule { }
