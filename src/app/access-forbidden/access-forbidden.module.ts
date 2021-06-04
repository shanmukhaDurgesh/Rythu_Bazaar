import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessForbiddenRoutingModule } from './access-forbidden-routing.module';
import { AccessForbiddenComponent } from './access-forbidden/access-forbidden.component';


@NgModule({
  declarations: [AccessForbiddenComponent],
  imports: [
    CommonModule,
    AccessForbiddenRoutingModule
  ]
})
export class AccessForbiddenModule { }
