import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AppConfig } from 'src/app/common-shared/constants/app.config';
import Swal from 'sweetalert2';
import { RythuBazaarService } from '../../rythu-bazaar/services/rythu-bazaar.service';

@Component({
  selector: 'app-leave-application-approvals',
  templateUrl: './leave-application-approvals.component.html',
  styleUrls: ['./leave-application-approvals.component.scss']
})
export class LeaveApplicationApprovalsComponent implements OnInit {

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
  empApprovals: any[] = [];
  constructor(private modal: NgbModal,private router: Router,private rbz: RythuBazaarService, private toastr : ToastrService) { }

  ngOnInit() {
    this.pageRecordSize =  AppConfig.GRID_PAGE_INFO.initpageSize;
    this.pageOptions = AppConfig.GRID_PAGE_INFO.pageOptions;
    this.defaultPageActions = AppConfig.PAGE_ACTIONS;
    this.allLeaves();
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
  onPage(event) {
    this.paginatoryDetails = event;
  }
  onempApprovals(val) {
    if(this.selectedData.length > 0){
    AppConfig.alertDialogue.fire({
      title: 'Are you sure?',
      text: "You want to " + `${val}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.empApprovals = [];
        this.selectedData.forEach(ele => {
          let obj = {
            "id" : ele.id
          }
          this.empApprovals.push(obj)
          console.log(this.empApprovals);
        })
        let updateObj = {
          "status": val,
          "leaves": this.empApprovals
          }
        this.rbz.updateLeave(updateObj).subscribe((response) =>this.approveSucces(response))
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
  approveSucces(response: any): void {
    if(response.status == 'FAILED') {
      this.toastr.error(response.message, 'Warning');
    }else{
    this.toastr.success(response.message, 'Success');
    }
    this.selectedData = [];
    this.allLeaves();
  }
}
