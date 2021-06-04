import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMetro4Module } from 'ng-metro4';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationInfoComponent } from './components/validation-info/validation-info.component';
import { GridPaginationInfoComponent } from './components/grid-pagination-info/grid-pagination-info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarHeaderComponent } from './components/calendar-header/calendar-header.component';
import { CalendarModule } from 'angular-calendar';


@NgModule({
  declarations: [ValidationInfoComponent, GridPaginationInfoComponent, CalendarHeaderComponent],
  imports: [
    CommonModule,
    NgMetro4Module,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CalendarModule,
  ],
  exports:[
    NgMetro4Module,
    FormsModule,
    ReactiveFormsModule,
    ValidationInfoComponent,
    GridPaginationInfoComponent,
    NgbModule,
    CalendarHeaderComponent,

  ],
  entryComponents : []
})
export class CommonSharedModule { }
