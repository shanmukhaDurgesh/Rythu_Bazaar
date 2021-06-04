import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RythuBazaarRoutingModule } from './rythu-bazaar-routing.module';
import { RythuBazaarEmployeesComponent } from './rythu-bazaar-employees/rythu-bazaar-employees.component';
import { TableModule } from 'primeng/table';
import { CommonSharedModule } from 'src/app/common-shared/common-shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RythuBazaarEmployeeAttendanceComponent } from './rythu-bazaar-employee-attendance/rythu-bazaar-employee-attendance.component';
import { RythuBazzarPayrollApprovalsComponent } from './rythu-bazzar-payroll-approvals/rythu-bazzar-payroll-approvals.component';


@NgModule({
  declarations: [RythuBazaarEmployeesComponent, RythuBazaarEmployeeAttendanceComponent, RythuBazzarPayrollApprovalsComponent],
  imports: [
    CommonModule,
    RythuBazaarRoutingModule,
    TableModule,
    CommonSharedModule,
    HttpClientModule,
  ]
})
export class RythuBazaarModule { }
