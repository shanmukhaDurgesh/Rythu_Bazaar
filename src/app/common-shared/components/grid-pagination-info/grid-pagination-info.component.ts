import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CustomValidationsService } from '../../services/custom-validations.service';

@Component({
  selector: 'grid-pagination-info',
  templateUrl: './grid-pagination-info.component.html',
  styleUrls: ['./grid-pagination-info.component.scss']
})
export class GridPaginationInfoComponent implements OnInit, OnChanges {

  @Input('totalRecords') totalRecords: any;
  @Input('pageData') pageData: any;
  @Input('selectedMenu') selectedMenu: any;
  paginatoryDetails: string;
  @Input('auditPageSize') auditPageSize: any;
  constructor(private pageInfoService: CustomValidationsService) {

   }

  tempMenu: any;

  ngOnInit() {
    if (this.selectedMenu) {
      this.paginatoryDetails = this.pageInfoService.getGridPageInfo(this.pageData, this.totalRecords);
    } else {
    if (this.auditPageSize) {
      this.paginatoryDetails = this.pageInfoService.auditGetPageInfo(this.totalRecords, this.auditPageSize);
    } else {
      this.paginatoryDetails = this.pageInfoService.initGetPageInfo(this.totalRecords);
    }

  }
  }

  ngOnChanges() {
    if (!this.pageData) {
      this.paginatoryDetails = this.pageInfoService.initGetPageInfo(this.totalRecords);
    } else {
      this.paginatoryDetails = this.pageInfoService.getGridPageInfo(this.pageData, this.totalRecords);
    }
 }

}

