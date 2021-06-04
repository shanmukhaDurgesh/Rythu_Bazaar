import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { TreeviewConfig } from 'ngx-treeview/lib/models/treeview-config';
// import { TreeviewItem } from 'ngx-treeview/lib/models/treeview-item';
import { TreeviewItem, TreeviewConfig } from 'ngx-treeview';
import { AppConfig } from 'src/app/common-shared/constants/app.config';
import Swal from 'sweetalert2';
import { Users } from '../models/users';
import { RolesService } from '../services/roles.service';
import roles from './../../../_files/roles.json'


@Component({
  selector: 'app-saas-roles',
  templateUrl: './saas-roles.component.html',
  styleUrls: ['./saas-roles.component.scss'],
  providers:[RolesService],

})
export class SaasRolesComponent implements OnInit {

// treeview start
  dropdownEnabled = true;
  items: TreeviewItem[];
  values: number[];
  config = TreeviewConfig.create({
      hasAllCheckBox: true,
      hasFilter: true,
      hasCollapseExpand: true,
      decoupleChildFromParent: false,
      maxHeight: 400
  });

  buttonClasses = [
      'btn-outline-primary',
      'btn-outline-secondary',
      'btn-outline-success',
      'btn-outline-danger',
      'btn-outline-warning',
      'btn-outline-info',
      'btn-outline-light',
      'btn-outline-dark'
  ];
  buttonClass = this.buttonClasses[0];
  
  // treeview end

  paginatoryDetails: any;
  pageOptions: number[];
  pageRecordSize;
  selectedData;
  public companyList:any[] = roles;
  model: any = {};
  public companyInputs: Users = new Users();
  defaultPageActions: { create: string; view: string; delete: string; edit: string; };
  pagePermissions: any= [];
  constructor(private modal: NgbModal,private router: Router, private service: RolesService) {
   }

  companyHeaders: any = [
    { field: 'role', header: 'Role', isLink: false , width: '140px', fieldType: 'text'},
    { field: 'internal', header: 'Internal', isLink: false , width: '140px', fieldType: 'text'},
    { field: 'totalUsers', header: 'Total Users', isLink: false  , width: '140px', fieldType: 'text'},
    { field: 'createdBy', header: 'Created By', isLink: false  , width: '140px', fieldType: 'text'},
  ];
  academyList : any = ['Martial Billing','Jnl Acadamey']
  rolesList : any = ['user','Admin']

  ngOnInit() {
      this.items = this.service.getBooks();
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

  onFilterChange(value: string) {
    console.log('filter:', value);
}

}
