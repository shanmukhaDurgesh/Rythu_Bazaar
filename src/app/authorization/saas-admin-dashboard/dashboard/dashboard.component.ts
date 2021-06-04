import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private route : Router){
    console.log(this.route);
    console.log(this.route.getCurrentNavigation().extras.state);
  }
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

  ngOnInit() {
  }

}
