import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcademyManagementComponent } from './academy-management/academy-management.component';


const routes: Routes = [
  {path: 'academy', component: AcademyManagementComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademyManagementRoutingModule { }
