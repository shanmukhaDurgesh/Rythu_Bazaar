import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AppConfig } from 'src/app/common-shared/constants/app.config';
import Swal from 'sweetalert2';
import { Users } from '../models/users';
import users from './../../../_files/users.json'



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  paginatoryDetails: any;
  pageOptions: number[];
  pageRecordSize;
  selectedData;
  public companyList:any[] = users;
  // model: any = {};
  public companyInputs: Users = new Users();
  public modalOption: NgbModalOptions = {};
  defaultPageActions: { create: string; view: string; delete: string; edit: string; };
  pagePermissions: any= [];
  @ViewChild('addInternalElement', {static:true}) addInternalBtn: ElementRef;
  internalsList: any= [];

  constructor(private modal: NgbModal,private router: Router) {
   }

  companyHeaders: any = [
    { field: 'name', header: 'Name', isLink: false  , width: '140px', fieldType: 'text'},
    { field: 'phone', header: 'Phone Number', isLink: false , width: '150px', fieldType: 'text'},
    { field: 'email', header: 'Email', isLink: false , width: '140px', fieldType: 'text'},
    { field: 'internal', header: 'Internal', isLink: false , width: '140px', fieldType: 'text'},
    { field: 'role', header: 'Role', isLink: false , width: '140px', fieldType: 'text'},
    { field: 'lastLogged', header: 'Last Logged In', isLink: false , width: '140px', fieldType: 'text'},
  ];
  academyList : any = ['Martial Billing','Jnl Acadamey']
  rolesList : any = ['user','Admin']

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
    this.internalsList = [
      {
        academy: undefined , 
        role: undefined
      }
    ]
    this.modal.open(template);
  }
  userEdit(event, rowData, selectedData: Users[], userForm:any) {
    this.selectedData = [rowData];
    if (rowData === this.selectedData[0]) {
      this.companyInputs = Object.assign({}, this.selectedData[0]);
    }
    this.modal.open(userForm, this.modalOption).result.then(() => {
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
    this.companyInputs.int = this.internalsList 
    console.log('SUCCESS!!' + JSON.stringify(this.companyInputs));
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
      academy: undefined,
      roles: undefined    
    })

    this.addInternalBtn.nativeElement.focus();
  }
}
