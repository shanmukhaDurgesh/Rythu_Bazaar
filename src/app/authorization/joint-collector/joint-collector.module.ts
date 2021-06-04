import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JointCollectorRoutingModule } from './joint-collector-routing.module';
import { DemandOrderApprovalsComponent } from './demand-order-approvals/demand-order-approvals.component';
import { LeaveApplicationApprovalsComponent } from './leave-application-approvals/leave-application-approvals.component';
import { TableModule } from 'primeng/table';
import { CommonSharedModule } from 'src/app/common-shared/common-shared.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [DemandOrderApprovalsComponent, LeaveApplicationApprovalsComponent],
  imports: [
    CommonModule,
    JointCollectorRoutingModule,
    TableModule,
    CommonSharedModule,
    HttpClientModule,
  ]
})
export class JointCollectorModule { }
