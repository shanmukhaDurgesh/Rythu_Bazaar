import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AppConfig } from 'src/app/common-shared/constants/app.config';
import Swal from 'sweetalert2';
import { RythuBazaarService } from '../services/rythu-bazaar.service';
import employees from './../../../_files/employees.json'

@Component({
  selector: 'app-rythu-bazaar-employees',
  templateUrl: './rythu-bazaar-employees.component.html',
  styleUrls: ['./rythu-bazaar-employees.component.scss']
})
export class RythuBazaarEmployeesComponent implements OnInit {

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
  @ViewChild('addInternalElement', {static:true}) addInternalBtn: ElementRef;
  employeeName: any;
  isEdit: boolean = false;
  deleteEmp: any[] = [];
  constructor(private modal: NgbModal,private router: Router, private rbz : RythuBazaarService,private toastr : ToastrService) {}
  companyHeaders: any = [
    { field: 'id', header: 'Emp No', isLink: false  , width: '120px', fieldType: 'text'},
    { field: 'name', header: 'Emp Name', isLink: true  , width: '120px', fieldType: 'text'},
    { field: 'reportingOfficePhone', header: 'Emp Phone', isLink: false , width: '130px', fieldType: 'text'},
    { field: 'designation', header: 'Designation', isLink: false  , width: '140px', fieldType: 'text'},
    { field: 'bazarName', header: 'Rythu Bazaar', isLink: false , width: '150px', fieldType: 'text'},
    { field: 'districtName', header: 'District', isLink: false , width: '140px', fieldType: 'text'},
  ];
  employeeMonthlyCostHeaders :any = [
    { field: 'month', header: 'Month', isLink: false  , width: '120px', fieldType: 'text'},
    { field: 'year', header: 'Year', isLink: false  , width: '120px', fieldType: 'text'},
    { field: 'leavesAcc', header: 'Leaves Acc', isLink: false , width: '130px', fieldType: 'text'},
    { field: 'leavesUtilized', header: 'Leaves Utilized', isLink: false  , width: '140px', fieldType: 'text'},
    { field: 'carryForwordedLeaves', header: 'Carry Forworded Leaves', isLink: false , width: '190px', fieldType: 'text'},
    { field: 'attendedDays', header: 'Attended Days', isLink: false , width: '140px', fieldType: 'text'},
    { field: 'monthlyCost', header: 'Monthly Cost', isLink: false , width: '140px', fieldType: 'text'},
    { field: 'perDayCost', header: 'Per Day Cost', isLink: false , width: '140px', fieldType: 'text'},
  ]
  stateList : any = ['Martial Billing','Jnl Acadamey']
  countryList : any = ['user','Admin']
  subscriptionList : any = ['ramiro', 'anastasia','demarco']
  districtList : any[] = [];
  rythuBazaarsList : any[] = [];
  payRollCostList : any[] = [];
  academyList : any[] = ["Asset 1","Asset 2","Asset 3","Asset 4",];
  employeeMonthlyCostList : any[] = employees;

  internalsList: any= [];
  pageRecordSizeOne;
  pageOptionsOne: number[];
  paginatoryDetailsOne: any;
  selectedDataOne;
  ngOnInit() {
      this.pageRecordSize =  AppConfig.GRID_PAGE_INFO.initpageSize;
      this.pageOptions = AppConfig.GRID_PAGE_INFO.pageOptions;
      this.defaultPageActions = AppConfig.PAGE_ACTIONS
      console.log(this.defaultPageActions);
      this.getAllEmployees();
      let obj = {
        "id" : 1
      }
      this.rbz.getAllDistrits(obj).subscribe((data) => {
        if(data['status']== 'SUCCESS'){
        console.log(data);
        this.districtList = data.data[0].district
        }
      })
  }
  getAllEmployees() {
    this.rbz.getAllUsers().subscribe((data) => {
      if(data['status']== 'SUCCESS'){
      console.log(data);
      this.companyList = data.data
      }
    })
  }
  onChangeDistrict(){
    let obj = {
      "id" : this.companyInputs.district
    }
    this.rbz.getAllRbz(obj).subscribe((data) => {
      if(data['status']== 'SUCCESS'){
      console.log(data);
      this.rythuBazaarsList = data.data
      }
    })
  }
  onPage(event) {
    this.paginatoryDetails = event;
  }

  onCreateUser(template) {
    this.companyInputs = {}
    this.internalsList = [
      {
        assetType: undefined,
        serialNo: undefined,
        comments : undefined,
      }
    ]
    this.modal.open(template);
  }
  userEdit(event, rowData, selectedData, programDetailModal) {
    this.internalsList = []
    this.isEdit = true;
    this.companyInputs = {}
    let input = {"id": rowData.id}
    this.rbz.getEmpById(input).subscribe((data) => this.succesEmpUpdateCallBack(data,rowData,programDetailModal))
  }
  succesEmpUpdateCallBack(data: any,selectedData,programDetailModal): void {
    console.log(data);
    this.selectedData = [data.data]
    if (this.selectedData) {
      if (this.selectedData.length == 1) {
        if (selectedData.id == this.selectedData[0].id) {
          this.companyInputs = this.selectedData[0]
          this.companyInputs.district = this.selectedData[0]['district']['id']
          this.companyInputs.perDayCost = this.selectedData[0]['perdayCost']
          this.companyInputs.reportingOfficeEmail = this.selectedData[0]['email']
          this.onChangeDistrict();
          this.companyInputs.rythuBazaar = this.selectedData[0]['rythubazar']['id']
          this.modalOption.backdrop = 'static';
          this.modal.open(programDetailModal, this.modalOption).result.then(() => {
          },
            (reason) => {
              this.modal.dismissAll('Cross Click');
              this.selectedData = [];
            });
        } else {
          // this.toastr.info('Please Select Valid Record!', 'Warning')
          this.toastr.error('Edit Can performed on the selected record only !', 'Warning');
        }

      } else {
        if (this.selectedData.length > 1) {
          this.toastr.error('Select Only One Record Only!', 'Warning')
        } else {
          this.toastr.error('Please Select A Record!', 'Warning');
        }
      }
    } else {
      this.toastr.error('Please Select A Record!', 'Warning')
    }
  }
  onDeleteEmp() {
    if(this.selectedData.length > 0){
    AppConfig.alertDialogue.fire({
      title: 'Are you sure?',
      text: "You want to Delete",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.deleteEmp = [];
        this.selectedData.forEach(ele => {
          let obj = {
            "id" : ele.id
          }
          this.deleteEmp.push(obj)
          console.log(this.deleteEmp);
        })
        this.rbz.deleteEmpById(this.deleteEmp).subscribe((response) =>this.deleteSucces(response))
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
      }
    })
   }else{
     this.toastr.error('Please Select A Record!', 'Warning')
   }
  }
  deleteSucces(response: any): void {
    if(response.status == 'FAILED') {
      this.toastr.error(response.data, 'Warning');
    }else{
    this.toastr.success(response.data, 'Success');
    }
    this.selectedData = [];
    this.getAllEmployees();
  }

  onSaveUserDetails() {
  }
  onPageOne(event) {
    this.paginatoryDetailsOne = event;
  }
  raiseEvent(event){
    console.log("event", event)
  }
  onSubmit(){
    // this.toastr.success('Created Successfully', 'Success')
    if(!this.isEdit){
    console.log('SUCCESS!!' + JSON.stringify(this.companyInputs));
    let obj = {
      "name": this.companyInputs.name,
      "state":{
          "id":1
      },
      "rythubazar":{
          "id": parseInt(this.companyInputs.rythuBazaar)
      },
      "district":{
          "id": parseInt(this.companyInputs.district)
      },
      "designation": this.companyInputs.designation,
      "reportingOffice": this.companyInputs.reportingOffice,
      "reportingOfficePhone": this.companyInputs.reportingOfficePhone,
      "perdayCost": this.companyInputs.payrollCost,
      "leavesAllowedPerMonth": this.companyInputs.leavesAllowedPerMonth,
      "email": this.companyInputs.reportingOfficeEmail
    }
    this.rbz.createEmployee(obj).subscribe((data) => {this.createSuucessCallBack(data)})
  }else{
    let obj = {
      "id" : this.selectedData[0].id,
      "name": this.companyInputs.name,
      "state":{
          "id":1
      },
      "rythubazar":{
          "id": parseInt(this.companyInputs.rythuBazaar)
      },
      "district":{
          "id": parseInt(this.companyInputs.district)
      },
      "designation": this.companyInputs.designation,
      "reportingOffice": this.companyInputs.reportingOffice,
      "reportingOfficePhone": this.companyInputs.reportingOfficePhone,
      "perdayCost": this.companyInputs.payrollCost,
      "leavesAllowedPerMonth": this.companyInputs.leavesAllowedPerMonth,
      "email": this.companyInputs.reportingOfficeEmail
    }
    this.rbz.updateEmp(obj).subscribe((data) => {this.createSuucessCallBack(data)})
  }
  }
  createSuucessCallBack(data: any): void {
    if(data.status == 'FAILED'){
      this.toastr.error(data.message, 'Error')
    }else{
      this.toastr.success(data.message, 'Success')
    }
    this.getAllEmployees();
    this.closeModal();
  }
  closeModal() {
    this.modal.dismissAll('Cross Click');
  }
  removeinternals(i){
    this.internalsList.splice(i,1);
  }
  addOneMoreinternals(){
    this.internalsList.push({
      assetType: undefined,
      serialNo: undefined,
      comments : undefined,
    })
    this.addInternalBtn.nativeElement.focus();
  }

  onSelectedEmployee(data,template){
    this.employeeName = data.name
    this.modal.open(template)
  }

}
