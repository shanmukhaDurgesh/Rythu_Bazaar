import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaasAdminReportsRoutingModule } from './saas-admin-reports-routing.module';
import { TableModule } from 'primeng/table';
import { CommonSharedModule } from 'src/app/common-shared/common-shared.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SaasAdminReportsRoutingModule,
    TableModule,
    CommonSharedModule,
    HttpClientModule,
  ]
})
export class SaasAdminReportsModule { }
