import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationRoutingModule } from './authorization-routing.module';
import { HeaderLayoutComponent } from './layoutComponents/header-layout/header-layout.component';
import { FooterLayoutComponent } from './layoutComponents/footer-layout/footer-layout.component';
import { BodyLayoutComponent } from './layoutComponents/body-layout/body-layout.component';
import { LeftNavMenuComponent } from './layoutComponents/left-nav-menu/left-nav-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonSharedModule } from '../common-shared/common-shared.module';



@NgModule({
  declarations: [HeaderLayoutComponent, FooterLayoutComponent, BodyLayoutComponent, LeftNavMenuComponent],
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
    HttpClientModule,
    CommonSharedModule
  ]
})
export class AuthorizationModule { }
