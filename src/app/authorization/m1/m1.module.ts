import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { M1RoutingModule } from './m1-routing.module';
import { M1Component } from './m1/m1.component';
import { TableModule } from 'primeng/table';
import { CommonSharedModule } from 'src/app/common-shared/common-shared.module';
@NgModule({
  declarations: [M1Component],
  imports: [
    TableModule,
    CommonModule,
    M1RoutingModule,
    CommonSharedModule
  ]
})
export class M1Module { }