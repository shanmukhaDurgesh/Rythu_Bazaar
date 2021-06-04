import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaasDashboardComponent } from './saas-dashboard/saas-dashboard.component';
import { SaasPoliciesComponent } from './saas-policies/saas-policies.component';
import { SaasFileexplorerComponent } from './saas-fileexplorer/saas-fileexplorer.component';
import { SaasVideocenterComponent } from './saas-videocenter/saas-videocenter.component';
import { SaasEventsComponent } from './saas-events/saas-events.component';
import { SaasUsersComponent } from './saas-users/saas-users.component';
import { SaasRolesComponent } from './saas-roles/saas-roles.component';
import { AcademyManagementComponent } from './academy-management/academy-management.component';


const routes: Routes = [
  {path: 'users', component: SaasUsersComponent},
  {path: 'roles', component: SaasRolesComponent},
  {path: 'dashboard', component: SaasDashboardComponent},
  {path: 'policies', component: SaasPoliciesComponent},
  {path: 'fileExplorer', component: SaasFileexplorerComponent},
  {path: 'videoCenter', component: SaasVideocenterComponent},
  {path: 'events', component: SaasEventsComponent},
  {path: 'academymanagement', component: AcademyManagementComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaasAdminRoutingModule { }
