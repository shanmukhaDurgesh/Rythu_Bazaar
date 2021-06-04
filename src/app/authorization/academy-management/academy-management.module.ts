import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademyManagementRoutingModule } from './academy-management-routing.module';
import { AcademyManagementComponent } from './academy-management/academy-management.component';
import { TableModule } from 'primeng/table';
import { CommonSharedModule } from 'src/app/common-shared/common-shared.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AcademyManagementComponent],
  imports: [
    CommonModule,
    AcademyManagementRoutingModule,
    TableModule,
    CommonSharedModule,
    HttpClientModule,
  ]
})
export class AcademyManagementModule { }
