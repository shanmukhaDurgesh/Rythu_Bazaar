import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentsComponent } from './documents/documents.component';
import { VideosComponent } from './videos/videos.component';


const routes: Routes = [
  {path: 'videos', component: VideosComponent},
  {path: 'documents', component: DocumentsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourceCenterRoutingModule { }
