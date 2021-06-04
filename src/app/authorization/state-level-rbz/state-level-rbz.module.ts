import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateLevelRbzRoutingModule } from './state-level-rbz-routing.module';
import { TableModule } from 'primeng/table';
import { CommonSharedModule } from 'src/app/common-shared/common-shared.module';
import { HttpClientModule } from '@angular/common/http';
import { DistrictLevelDemandOrdersComponent } from './district-level-demand-orders/district-level-demand-orders.component';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';


@NgModule({
  declarations: [DistrictLevelDemandOrdersComponent, LeaveApplicationComponent],
  imports: [
    CommonModule,
    StateLevelRbzRoutingModule,
    TableModule,
    CommonSharedModule,
    HttpClientModule,
  ]
})
export class StateLevelRbzModule { }
