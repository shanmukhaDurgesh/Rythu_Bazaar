import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { M2RoutingModule } from './m2-routing.module';
import { M2Component } from './m2/m2.component';
import { CommonSharedModule } from 'src/app/common-shared/common-shared.module';
import { NgMetro4Module } from 'ng-metro4';


@NgModule({
  declarations: [M2Component],
  imports: [
    CommonModule,
    M2RoutingModule,
    CommonSharedModule,
    NgMetro4Module
  ]
})
export class M2Module { }
