import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AppConfig } from 'src/app/common-shared/constants/app.config';
import employees from './../../../_files/rbz.json'

@Component({
  selector: 'app-district-level-demand-orders',
  templateUrl: './district-level-demand-orders.component.html',
  styleUrls: ['./district-level-demand-orders.component.scss']
})
export class DistrictLevelDemandOrdersComponent implements OnInit {
  paginatoryDetails: any;
  pageOptions: number[];
  pageRecordSize;
  selectedData : any[] = [];
  public companyList:any[] = employees;
  public payRollGenList:any[] = [];
  // model: any = {};
  public companyInputs :any = {};
  public modalOption: NgbModalOptions = {};
  defaultPageActions: { create: string; view: string; delete: string; edit: string; };
  pagePermissions: any= [];
  payRollGenHeaders: any = [
    { field: 'rbz', header: 'Rythu bazaar', isLink: false , width: '120px', fieldType: 'text'},
    { field: 'amnt', header: 'Demand Amount', isLink: false , width: '140px', fieldType: 'text'},
    { field: 'totalAmnt', header: 'Total Demand Amount', isLink: false , width: '170px', fieldType: 'text'},
    { field: 'status', header: 'Status', isLink: false , width: '120px', fieldType: 'text'},
    { field: 'approvedBy', header: 'Approved By', isLink: false  , width: '130px', fieldType: 'text'},
    { field: 'submittedBy', header: 'Submitted By', isLink: false , width: '130px', fieldType: 'text'},
    { field: 'submittedTs', header: 'Submitted TS', isLink: false , width: '130px', fieldType: 'text'},
  ]
  companyHeaders: any = [
    { field: 'district', header: 'District', isLink: true , width: '130px', fieldType: 'text'},
    { field: 'orderAmmount', header: 'Demand Amount', isLink: false  , width: '140px', fieldType: 'text'},
    { field: 'totalRbz', header: 'Total Rythu Bazaars', isLink: false , width: '130px', fieldType: 'text'},
    { field: 'pendingApprovals', header: 'Pending Approvals', isLink: false  , width: '130px', fieldType: 'text'},
    { field: 'approvedRbz', header: 'Approved rbz', isLink: false , width: '160px', fieldType: 'text'},
  ];
  pageRecordSizeOne;
  pageOptionsOne: number[];
  paginatoryDetailsOne: any;
  selectedDataOne;
  districtsList :any[] = []
  yearValue : any;
  monthValue : any;
  yearList = ['2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022'];
  monthList = [
    {"id" : 1, "month":"January"},{"id" : 2, "month":"February"},{"id" : 3, "month":"March"},{"id" : 4, "month":"April"},{"id" : 5, "month":"May"},{"id" : 6, "month":"June"},
    {"id" : 7, "month":"July"},{"id" : 8, "month":"August"},{"id" : 9, "month":"September"},{"id" : 10, "month":"October"},{"id" : 11, "month":"November"},{"id" : 12, "month":"December"}]

  constructor(private modal: NgbModal,private router: Router) {
    console.log(this.router);
    console.log(this.router.getCurrentNavigation().extras.state);
  }

  ngOnInit() {
    this.pageRecordSize =  AppConfig.GRID_PAGE_INFO.initpageSize;
    this.pageOptions = AppConfig.GRID_PAGE_INFO.pageOptions;
    this.defaultPageActions = AppConfig.PAGE_ACTIONS;
    this.pageRecordSizeOne =  AppConfig.GRID_PAGE_INFO.initpageSize;
    this.pageOptionsOne = AppConfig.GRID_PAGE_INFO.pageOptions;
    this.defaultPageActions = AppConfig.PAGE_ACTIONS;
    this.yearValue = new Date().getFullYear().toString();
    this.monthValue = (new Date().getMonth() + 1).toString();
  }
  onPage(event) {
    this.paginatoryDetails = event;
  }
  onPayrollGeneration($event, rowData, selectedData,template){
    this.modal.open(template)
  }
  onPageOne(event) {
    this.paginatoryDetailsOne = event;
  }
  closeModal() {
    this.modal.dismissAll('Cross Click');
  }
  onDeleteUser(){

  }
  onSelectedRbz(data,template){
    this.modal.open(template)
  }
  onOrderGeneration(template){
    this.modal.open(template)
  }
  onSubmit(){
    console.log(this.companyInputs);
  }
  onAttendanceSearch(){
    if(this.monthValue == '2' && this.yearValue == '2021'){
      this.companyList = employees
    }else{
      this.companyList = []
    }
  }

}
