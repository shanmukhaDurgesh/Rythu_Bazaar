import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppConfig } from 'src/app/common-shared/constants/app.config';
import Swal from 'sweetalert2';
import company from './../../../_files/company.json'
import { Policies } from '../models/policies';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saas-policies',
  templateUrl: './saas-policies.component.html',
  styleUrls: ['./saas-policies.component.scss']
})
export class SaasPoliciesComponent implements OnInit {

  paginatoryDetails: any;
  pageOptions: number[];
  pageRecordSize;
  selectedData;
  public companyList:{id:number,companyname:string, contactperson:string, email:string}[] = company;
  // model: any = {};
  public companyInputs: Policies = new Policies();
  defaultPageActions: { create: string; view: string; delete: string; edit: string; };
  pagePermissions: any= [];
  constructor(private modal: NgbModal,private router: Router) {
    // console.log(this.router);
    // console.log(this.router.getCurrentNavigation().extras.state);
    // this.pagePermissions = this.router.getCurrentNavigation().extras.state.permissions || []
   }

  companyHeaders: any = [
    { field: 'id', header: 'Company ID', isLink: false  , width: '140px', fieldType: 'text'},
    { field: 'companyname', header: 'Company Name', isLink: false , width: '150px', fieldType: 'text'},
    { field: 'contactperson', header: 'Contact Person', isLink: false , width: '140px', fieldType: 'text'},
    { field: 'email', header: 'Email', isLink: false , width: '140px', fieldType: 'text'},
  ];
  prItemList : any = ['One','Two','Three']

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
  onEditUser() {
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
