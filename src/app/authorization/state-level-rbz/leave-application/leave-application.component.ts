import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AppConfig } from 'src/app/common-shared/constants/app.config';
import { RythuBazaarService } from '../../rythu-bazaar/services/rythu-bazaar.service';

@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.component.html',
  styleUrls: ['./leave-application.component.scss']
})
export class LeaveApplicationComponent implements OnInit {
  paginatoryDetails: any;
  pageOptions: number[];
  pageRecordSize;
  selectedData : any[] = [];
  public companyList:any[] = [];
  // model: any = {};
  public companyInputs :any = {};
  public modalOption: NgbModalOptions = {};
  defaultPageActions: { create: string; view: string; delete: string; edit: string; };
  pagePermissions: any= [];
  companyHeaders: any = [
    { field: 'employeeName', header: 'Emp Name', isLink: true , width: '130px', fieldType: 'text'},
    { field: 'leaveDate', header: 'Date of Leave', isLink: false  , width: '140px', fieldType: 'text'},
    { field: 'leaveType', header: 'Leave Type', isLink: false , width: '130px', fieldType: 'text'},
    { field: 'status', header: 'Status', isLink: false  , width: '130px', fieldType: 'text'},
  ];
  leaveTypeList :any = ["Sick Leave","Casual Leave","Others"]
  employeeList: any[] = [];
  constructor(private modal: NgbModal,private router: Router,private rbz: RythuBazaarService, private toastr : ToastrService) { }

  ngOnInit() {
    this.pageRecordSize =  AppConfig.GRID_PAGE_INFO.initpageSize;
    this.pageOptions = AppConfig.GRID_PAGE_INFO.pageOptions;
    this.defaultPageActions = AppConfig.PAGE_ACTIONS;
    this.allLeaves()
    this.getAllEmployees();
  }
  allLeaves() {
    let obj = {
      "state":{"id":1},
      "district":{"id":11},
      "rythubazar":{"id":1}
    }
    this.rbz.getAllLeaves(obj).subscribe((data) => {
      if(data['status']== 'SUCCESS'){
      console.log(data);
      this.companyList = data.data
      }
    })
  }
  getAllEmployees() {
    this.rbz.getAllUsers().subscribe((data) => {
      if(data['status']== 'SUCCESS'){
      console.log(data);
      this.employeeList = data.data
      }
    })
  }
  closeModal() {
    this.modal.dismissAll('Cross Click');
  }
  onPage(event) {
    this.paginatoryDetails = event;
  }
  onLeaveApplication(template){
    this.modal.open(template)
  }
  onEmployeeChane(){
    let emp :any = this.employeeList.filter((each:any) => {
      return each.id == this.companyInputs.name
    })
    this.companyInputs.rbz = emp[0].bazarName
    this.companyInputs.district = emp[0].districtName
  }
  onSubmit(){
    console.log('SUCCESS!!' + JSON.stringify(this.companyInputs));
    let emp :any = this.employeeList.filter((each:any) => {
      return each.id == this.companyInputs.name
    })
    let obj = {
      "state": {
          "id": 1
      },
      "district": {
          "id": 11
      },
      "rythubazar": {
          "id": 1
      },
      "employeeId": {
          "id": emp[0].id
      },
      "employeeName": emp[0].name,
      "leaveType": this.companyInputs.leaveType,
      "leaveDate": this.companyInputs.attendanceDate,
      "status": "Pending"
  }
  this.rbz.CreateLeaves(obj).subscribe((data) => {this.createSuucessCallBack(data)})
  }
  createSuucessCallBack(data: any): void {
    if(data.status == 'FAILED'){
      this.toastr.error(data.message, 'Error')
    }else{
      this.toastr.success(data.message, 'Success')
    }
    this.allLeaves();
    this.closeModal();
  }
}
