import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaasAdminRoutingModule } from './saas-admin-routing.module';
import { SaasDashboardComponent } from './saas-dashboard/saas-dashboard.component';
import { SaasVideocenterComponent } from './saas-videocenter/saas-videocenter.component';
import { SaasFileexplorerComponent } from './saas-fileexplorer/saas-fileexplorer.component';
import { SaasPoliciesComponent } from './saas-policies/saas-policies.component';
import { TableModule } from 'primeng/table';
import { CommonSharedModule } from 'src/app/common-shared/common-shared.module';
import { HttpClientModule } from '@angular/common/http';
import { SaasEventsComponent } from './saas-events/saas-events.component';
import { SaasUsersComponent } from './saas-users/saas-users.component';
import { SaasRolesComponent } from './saas-roles/saas-roles.component';
import { TreeviewModule } from 'ngx-treeview';
import { RolesService } from './services/roles.service';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AcademyManagementComponent } from './academy-management/academy-management.component';


@NgModule({
  declarations: [SaasDashboardComponent, SaasVideocenterComponent, SaasFileexplorerComponent, SaasPoliciesComponent, SaasEventsComponent, SaasUsersComponent, SaasRolesComponent, AcademyManagementComponent],
  imports: [
    TableModule,
    CommonModule,
    SaasAdminRoutingModule,
    CommonSharedModule,
    HttpClientModule,
    TreeviewModule.forRoot(),
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),

  ],
  exports: [SaasEventsComponent],
  providers: [
    RolesService
]

})
export class SaasAdminModule { }
