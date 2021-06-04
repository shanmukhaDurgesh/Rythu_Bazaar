import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourceCenterRoutingModule } from './resource-center-routing.module';
import { TableModule } from 'primeng/table';
import { CommonSharedModule } from 'src/app/common-shared/common-shared.module';
import { HttpClientModule } from '@angular/common/http';
import { VideosComponent } from './videos/videos.component';
import { DocumentsComponent } from './documents/documents.component';


@NgModule({
  declarations: [VideosComponent, DocumentsComponent],
  imports: [
    CommonModule,
    ResourceCenterRoutingModule,
    TableModule,
    CommonSharedModule,
    HttpClientModule,
  ]
})
export class ResourceCenterModule { }
