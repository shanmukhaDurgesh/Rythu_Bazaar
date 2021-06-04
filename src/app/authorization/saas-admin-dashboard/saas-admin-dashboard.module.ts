import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaasAdminDashboardRoutingModule } from './saas-admin-dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableModule } from 'primeng/table';
import { CommonSharedModule } from 'src/app/common-shared/common-shared.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SaasAdminDashboardRoutingModule,
    TableModule,
    CommonSharedModule,
    HttpClientModule,
  ]
})
export class SaasAdminDashboardModule { }
