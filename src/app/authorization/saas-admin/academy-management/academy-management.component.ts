import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AppConfig } from 'src/app/common-shared/constants/app.config';
import Swal from 'sweetalert2';
import { AcademyManagement } from '../models/academy';
import academy from './../../../_files/academy.json'

@Component({
  selector: 'app-academy-management',
  templateUrl: './academy-management.component.html',
  styleUrls: ['./academy-management.component.scss']
})
export class AcademyManagementComponent implements OnInit {

  paginatoryDetails: any;
  pageOptions: number[];
  pageRecordSize;
  selectedData;
  public companyList:any[] = academy;
  // model: any = {};
  public companyInputs: AcademyManagement = new AcademyManagement();
  public modalOption: NgbModalOptions = {};
  defaultPageActions: { create: string; view: string; delete: string; edit: string; };
  pagePermissions: any= [];
  constructor(private modal: NgbModal,private router: Router) {
   }

  companyHeaders: any = [
    { field: 'name', header: 'Academy Name', isLink: false  , width: '140px', fieldType: 'text'},
    { field: 'pocname', header: 'POC Name', isLink: false  , width: '140px', fieldType: 'text'},
    { field: 'id', header: 'Total Members', isLink: false  , width: '140px', fieldType: 'text'},
    { field: 'phone', header: 'POC Phone Number', isLink: false , width: '150px', fieldType: 'text'},
    { field: 'email', header: 'Email', isLink: false , width: '140px', fieldType: 'text'},
    { field: 'subscription', header: 'Subscription Plan', isLink: false , width: '140px', fieldType: 'text'},
  ];
  stateList : any = ['Martial Billing','Jnl Acadamey']
  countryList : any = ['user','Admin']
  subscriptionList : any = ['ramiro', 'anastasia','demarco']

  ngOnInit() {
      this.pageRecordSize =  AppConfig.GRID_PAGE_INFO.initpageSize;
      this.pageOptions = AppConfig.GRID_PAGE_INFO.pageOptions;
      this.defaultPageActions = AppConfig.PAGE_ACTIONS
      console.log(this.defaultPageActions);
      
  }

  onPage(event) {
    this.paginatoryDetails = event;
  }

  onCreateUser(template) {
    this.modal.open(template);
  }
  userEdit(event, rowData, selectedData: AcademyManagement[], acdemyForm:any) {
    this.selectedData = [rowData];
    if (rowData === this.selectedData[0]) {
      this.companyInputs = Object.assign({}, this.selectedData[0]);
    }
    this.modal.open(acdemyForm, this.modalOption).result.then(() => {
    },
      (reason) => {
        this.modal.dismissAll('Cross Click');
        this.selectedData = [];

      });
  }
  onDeleteUser() {
    AppConfig.alertDialogue.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        AppConfig.alertDialogue.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        AppConfig.alertDialogue.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

  onSaveUserDetails() {
  }

  raiseEvent(event){
    console.log("event", event)
  }
  onSubmit(){
    // this.toastr.success('Created Successfully', 'Success')
    console.log('SUCCESS!!' + JSON.stringify(this.companyInputs));
    this.closeModal();
  }
  closeModal() {
    this.modal.dismissAll('Cross Click');
  }

}
