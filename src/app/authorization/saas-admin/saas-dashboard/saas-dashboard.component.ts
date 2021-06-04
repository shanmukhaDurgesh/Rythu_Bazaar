import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saas-dashboard',
  templateUrl: './saas-dashboard.component.html',
  styleUrls: ['./saas-dashboard.component.scss']
})
export class SaasDashboardComponent implements OnInit {
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
