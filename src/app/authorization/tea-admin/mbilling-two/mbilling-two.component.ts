import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mbilling-two',
  templateUrl: './mbilling-two.component.html',
  styleUrls: ['./mbilling-two.component.scss']
})
export class MbillingTwoComponent implements OnInit {
  values = [
    {
      name : 'Academies',
      number : 2345
    },
    {
      name : 'Academies',
      number : 2345
    },
    {
      name : 'Academies',
      number : 2345
    },
    {
      name : 'Academies',
      number : 2345
    },
    {
      name : 'Academies',
      number : 2345
    },
    {
      name : 'Academies',
      number : 2345
    },
    {
      name : 'Academies',
      number : 2345
    },
    {
      name : 'Academies',
      number : 2345
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
