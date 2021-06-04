import { Component, OnInit } from '@angular/core';
import { NgbModalOptions, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppConfig } from 'src/app/common-shared/constants/app.config';
import Swal from 'sweetalert2';
import company from './../../../_files/company.json'
import { Company } from '../models/company';
@Component({
  selector: 'app-m-billing',
  templateUrl: './m-billing.component.html',
  styleUrls: ['./m-billing.component.scss']
})
export class MBillingComponent implements OnInit {

  paginatoryDetails: any;
  pageOptions: number[];
  pageRecordSize;
  selectedData;
  public companyList:{id:number,companyname:string, contactperson:string, email:string}[] = company;
  // model: any = {};
  public companyInputs: Company = new Company();
  constructor(private modal: NgbModal,) { }

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
