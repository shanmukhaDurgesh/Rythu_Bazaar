import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'validation-info',
  templateUrl: './validation-info.component.html',
  styleUrls: ['./validation-info.component.scss']
})
export class ValidationInfoComponent implements OnInit {

  @Input('formName') formName: NgForm;
  @Input('fieldName') fieldName: any;
  @Input('validationMessage') validationMessage: any;
  constructor() { }

  ngOnInit() {
  }

}
