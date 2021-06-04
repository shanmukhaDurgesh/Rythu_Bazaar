import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AppConfig } from 'src/app/common-shared/constants/app.config';
import employees from './../../../_files/users.json'

@Component({
  selector: 'app-rythu-bazzar-payroll-approvals',
  templateUrl: './rythu-bazzar-payroll-approvals.component.html',
  styleUrls: ['./rythu-bazzar-payroll-approvals.component.scss']
})
export class RythuBazzarPayrollApprovalsComponent implements OnInit {
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
    { field: 'empName', header: 'Emp Name', isLink: false , width: '120px', fieldType: 'text'},
    { field: 'salary', header: 'Salary', isLink: false , width: '120px', fieldType: 'text'},
    { field: 'attendedDays', header: 'Attended Days', isLink: false , width: '120px', fieldType: 'text'},
    { field: 'leaves', header: 'Leaves', isLink: false , width: '120px', fieldType: 'text'},
    { field: 'cost', header: 'Cost', isLink: false , width: '120px', fieldType: 'text'},
  ]
  companyHeaders: any = [
    { field: 'rbz', header: 'Rythu Bazaar', isLink: true , width: '130px', fieldType: 'text'},
    { field: 'my', header: 'Month/Year', isLink: false  , width: '120px', fieldType: 'text'},
    { field: 'orderAmmount', header: 'Order Amount', isLink: true  , width: '140px', fieldType: 'text'},
    { field: 'submittedBy', header: 'Submitted By', isLink: false , width: '130px', fieldType: 'text'},
    { field: 'approvedBy', header: 'Approved By', isLink: false  , width: '130px', fieldType: 'text'},
    { field: 'totalPayDays', header: 'Total Payment Days', isLink: false , width: '160px', fieldType: 'text'},
    { field: 'status', header: 'Status', isLink: false , width: '120px', fieldType: 'text'},
  ];
  pageRecordSizeOne;
  pageOptionsOne: number[];
  paginatoryDetailsOne: any;
  selectedDataOne;
  yearList = ['2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022'];
  monthList = [
    {"id" : 1, "month":"January"},{"id" : 2, "month":"February"},{"id" : 3, "month":"March"},{"id" : 4, "month":"April"},{"id" : 5, "month":"May"},{"id" : 6, "month":"June"},
    {"id" : 7, "month":"July"},{"id" : 8, "month":"August"},{"id" : 9, "month":"September"},{"id" : 10, "month":"October"},{"id" : 11, "month":"November"},{"id" : 12, "month":"December"}]
  rythuBazaarsList : any[] = []
  constructor(private modal: NgbModal,private router: Router) { }

  ngOnInit() {
    this.pageRecordSize =  AppConfig.GRID_PAGE_INFO.initpageSize;
    this.pageOptions = AppConfig.GRID_PAGE_INFO.pageOptions;
    this.defaultPageActions = AppConfig.PAGE_ACTIONS;
    this.pageRecordSizeOne =  AppConfig.GRID_PAGE_INFO.initpageSize;
    this.pageOptionsOne = AppConfig.GRID_PAGE_INFO.pageOptions;
    this.defaultPageActions = AppConfig.PAGE_ACTIONS;
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
  onSubmit(){
    console.log(this.companyInputs);
  }
}
