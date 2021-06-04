import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RythuBazaarEmployeeAttendanceComponent } from './rythu-bazaar-employee-attendance/rythu-bazaar-employee-attendance.component';
import { RythuBazaarEmployeesComponent } from './rythu-bazaar-employees/rythu-bazaar-employees.component';
import { RythuBazzarPayrollApprovalsComponent } from './rythu-bazzar-payroll-approvals/rythu-bazzar-payroll-approvals.component';


const routes: Routes = [
  {path: 'rythu-bazaar-employees', component: RythuBazaarEmployeesComponent},
  {path: 'rythu-bazaar-employee-attendance', component: RythuBazaarEmployeeAttendanceComponent},
  {path: 'rythu-bazaar-payroll-approvals', component: RythuBazzarPayrollApprovalsComponent},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RythuBazaarRoutingModule { }
