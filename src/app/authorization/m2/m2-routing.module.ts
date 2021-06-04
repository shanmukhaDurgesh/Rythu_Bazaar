import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { M2Component } from './m2/m2.component';


const routes: Routes = [
  {path: 'm2', component: M2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class M2RoutingModule { }
