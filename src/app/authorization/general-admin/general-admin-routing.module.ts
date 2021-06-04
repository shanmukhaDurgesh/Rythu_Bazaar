import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolesComponent } from './roles/roles.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'roles', component: RolesComponent},
  {path: 'subscriptions', component: SubscriptionsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralAdminRoutingModule { }
