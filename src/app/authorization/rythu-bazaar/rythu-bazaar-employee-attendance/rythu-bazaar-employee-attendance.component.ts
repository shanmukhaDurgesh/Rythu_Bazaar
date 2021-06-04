import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppConfig } from 'src/app/common-shared/constants/app.config';
import employees from './../../../_files/employees.json'

@Component({
  selector: 'app-rythu-bazaar-employee-attendance',
  templateUrl: './rythu-bazaar-employee-attendance.component.html',
  styleUrls: ['./rythu-bazaar-employee-attendance.component.scss']
})
export class RythuBazaarEmployeeAttendanceComponent implements OnInit {
  paginatoryDetails: any;
  pageOptions: number[];
  pageRecordSize;
  selectedData : any[] = [];
  public employeeAtteList:any[] = [];
  employeeAtteHeaders : any = [
    { field: 'empName', header: 'Emp No', isLink: false  , width: '120px', fieldType: 'text'},
    { field: 'attendancePres', header: 'Attended/Leave', isLink: true  , width: '130px', fieldType: 'text'},
    { field: 'leaveType', header: 'Leave Type', isLink: false , width: '130px', fieldType: 'text'},
    { field: 'dayCost', header: 'Day Cost', isLink: false , width: '120px', fieldType: 'text'},
  ];
  companyHeaders: any = [];
  yearValue : any;
  monthValue : any;
  @ViewChild('pdf', {static: false}) pdf: ElementRef;
  companyList :any[] = [];
  companyInputs : any = {};
  districtList : any[] = [];
  rythuBazaarsList : any[] = [];
  maxDate : any
  presenceList  = ["Attended","Leave","Half Day Leave"]
  leaveTypeList = ["Sick Leave","Casual Leave","Others"]
  yearList = ['2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022'];
  monthList = [
    {"id" : 1, "month":"January"},{"id" : 2, "month":"February"},{"id" : 3, "month":"March"},{"id" : 4, "month":"April"},{"id" : 5, "month":"May"},{"id" : 6, "month":"June"},
    {"id" : 7, "month":"July"},{"id" : 8, "month":"August"},{"id" : 9, "month":"September"},{"id" : 10, "month":"October"},{"id" : 11, "month":"November"},{"id" : 12, "month":"December"}]
  defaultPageActions: { create: string; view: string; delete: string; edit: string; };
  isEdit: boolean = false;
  deleteAttenBol: boolean = false;
  minDate: { year: number; month: number; day: number; };
  constructor(private modal: NgbModal,private router: Router) { }

  ngOnInit() {
    this.pageRecordSize =  AppConfig.GRID_PAGE_INFO.initpageSize;
    this.pageOptions = AppConfig.GRID_PAGE_INFO.pageOptions;
    this.defaultPageActions = AppConfig.PAGE_ACTIONS
    for(var i = 1; i <= 31; i += 1){
      this.companyHeaders.push({i : i})
    }
    this.yearValue = new Date().getFullYear().toString();
    this.monthValue = (new Date().getMonth() + 1).toString();
    console.log(this.monthValue + this.yearValue);
    this.onAttendanceSearch()
  }
  onAttendanceSearch(){
    this.companyList = []
    if(this.monthValue == '2' && this.yearValue == '2021'){
      this.companyList = [
        {1 : 1,2 : 1,3 : 1,4 : 1,5 : 1,6 : 1,7 : 1,8 : 1,9 : 1,10 : 1,11 : 1,12 : 1,13 : 1,14 : 1,15 : 1,16 : 1, "month":"Glenna"},
        {9 : 2, "month":"Nicholas"},
        {9 : 3, "month":"Clementina"},
        {9 : 4, "month":"Leanne"},
        {9 : 5, "month":"Ervin"},
        {9 : 6, "month":"Patricia"}]
    }
  }
  closeModal() {
    this.modal.dismissAll('Cross Click');
  }
  onEnterAttendance(template){
    this.maxDate = {year : 2021, month : 2, day : 14}
    this.minDate = {year : 2021, month : 2, day : 14}
    this.employeeAtteList = []
    this.isEdit = false
    this.deleteAttenBol = false
    this.companyInputs.attendanceDate = {year : 2021, month : 2, day : 14}
    this.modal.open(template)
    // this.onSubmit()
  }
  onEditAttendance(template){
    this.minDate = {year : 2020, month : 1, day : 1}
    this.maxDate = {year : 2021, month : 2, day : 14}
    this.employeeAtteList = []
    this.isEdit = true
    this.deleteAttenBol = true
    this.companyInputs.attendanceDate = undefined
    this.modal.open(template)
  }
  onDownloadReport(){

  }
  onSubmit(){
    this.employeeAtteList = []
    if(!this.isEdit){
      this.companyList.forEach((data) => {
        let obj = {
            "empName" : data.month,
            "attendancePres" : undefined,
            "leaveType" : undefined,
            "dayCost" : "1000"
        }
        this.employeeAtteList.push(obj)
      })
    }
    else{
      this.employeeAtteList = [{
        "empName" : "Nicholas",
        "attendancePres" : "Leave",
        "leaveType" : "Sick Leave",
        "dayCost" : "1000"
      }]
    }
  }
  onSave(data){
    console.log(data);
  }
  onSelectAttendance(data){

  }
}
