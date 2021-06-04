import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeaAdminRoutingModule } from './tea-admin-routing.module';
import { CompanyComponent } from './company/company.component';
import { CommonSharedModule } from 'src/app/common-shared/common-shared.module';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { MBillingComponent } from './m-billing/m-billing.component';
import { MbillingTwoComponent } from './mbilling-two/mbilling-two.component';
import { MbillingThreeComponent } from './mbilling-three/mbilling-three.component';
import { MbilliFourComponent } from './mbilli-four/mbilli-four.component';
import { FilelistComponent } from './filelist/filelist.component';

@NgModule({
  declarations: [CompanyComponent, MBillingComponent, MbillingTwoComponent, MbillingThreeComponent, MbilliFourComponent, FilelistComponent],
  imports: [
    TableModule,
    CommonModule,
    TeaAdminRoutingModule,
    CommonSharedModule,
    HttpClientModule
  ]
})
export class TeaAdminModule { }
