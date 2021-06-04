import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralAdminRoutingModule } from './general-admin-routing.module';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { TableModule } from 'primeng/table';
import { CommonSharedModule } from 'src/app/common-shared/common-shared.module';
import { HttpClientModule } from '@angular/common/http';
import { TreeviewModule } from 'ngx-treeview';
import { RolesService } from './services/roles.service';


@NgModule({
  declarations: [UsersComponent, RolesComponent, SubscriptionsComponent],
  imports: [
    CommonModule,
    GeneralAdminRoutingModule,
    TableModule,
    CommonSharedModule,
    HttpClientModule,
    TreeviewModule.forRoot(),
  ],
  providers: [
    RolesService
]
})
export class GeneralAdminModule { }
