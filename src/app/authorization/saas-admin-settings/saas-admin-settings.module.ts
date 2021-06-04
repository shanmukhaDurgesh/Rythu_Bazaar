import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaasAdminSettingsRoutingModule } from './saas-admin-settings-routing.module';
import { TableModule } from 'primeng/table';
import { CommonSharedModule } from 'src/app/common-shared/common-shared.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SaasAdminSettingsRoutingModule,
    TableModule,
    CommonSharedModule,
    HttpClientModule,
  ]
})
export class SaasAdminSettingsModule { }
