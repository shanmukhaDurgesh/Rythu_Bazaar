import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { M1Component } from './m1/m1.component';


const routes: Routes = [
  {path: 'm1', component: M1Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class M1RoutingModule { }
