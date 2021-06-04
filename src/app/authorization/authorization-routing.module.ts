import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyLayoutComponent } from './layoutComponents/body-layout/body-layout.component';
import { M1Component } from './m1/m1/m1.component';
import { AuthenticationGuard } from '../common-shared/guards/authentication.guard';

const routes: Routes = [
  {path: '', component: BodyLayoutComponent,
    children: [
      {path: '', redirectTo: 'saas-admin', pathMatch: 'prefix'},
      { path: 'rythu-Bazaar', loadChildren: () => import('./rythu-bazaar/rythu-bazaar.module').then(m => m.RythuBazaarModule), canActivate: [AuthenticationGuard] },
      { path: 'state-level-rbz', loadChildren: () => import('./state-level-rbz/state-level-rbz.module').then(m => m.StateLevelRbzModule), canActivate: [AuthenticationGuard] },
      { path: 'joint-collector', loadChildren: () => import('./joint-collector/joint-collector.module').then(m => m.JointCollectorModule), canActivate: [AuthenticationGuard] },
      { path: 'saas-admin', loadChildren: () => import('./saas-admin/saas-admin.module').then(m => m.SaasAdminModule), canActivate: [AuthenticationGuard] },
      { path: 'generalAdmin', loadChildren: () => import('./general-admin/general-admin.module').then(m => m.GeneralAdminModule), canActivate: [AuthenticationGuard] },
      { path: 'saasAdminDashboard', loadChildren: () => import('./saas-admin-dashboard/saas-admin-dashboard.module').then(m => m.SaasAdminDashboardModule), canActivate: [AuthenticationGuard] },
      { path: 'academyManagement', loadChildren: () => import('./academy-management/academy-management.module').then(m => m.AcademyManagementModule), canActivate: [AuthenticationGuard] },
      { path: 'resourceCenter', loadChildren: () => import('./resource-center/resource-center.module').then(m => m.ResourceCenterModule), canActivate: [AuthenticationGuard] },
      { path: 'm1', loadChildren: () => import('./m1/m1.module').then(m => m.M1Module), canActivate: [AuthenticationGuard] },
      { path: 'm2', loadChildren: () => import('./m2/m2.module').then(m => m.M2Module), canActivate: [AuthenticationGuard] },
      { path: 'tea-admin', loadChildren: () => import('./tea-admin/tea-admin.module').then(m => m.TeaAdminModule), canActivate: [AuthenticationGuard] },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizationRoutingModule { }
