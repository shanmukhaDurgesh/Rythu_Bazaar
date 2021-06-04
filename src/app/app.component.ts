import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'uiCodeBaseOrigin';
  constructor(private router: Router){
    router.events.subscribe((val) => {
      // // see also
      // console.log('val', val)
      // console.log('end',val instanceof NavigationEnd)
      // console.log('start',val instanceof NavigationStart)
  });
  }
  ngOnInit(): void {
    // console.log('this.router.routerState.snapshot.url', this.router.routerState.snapshot.url)
    if(!localStorage.getItem('isAuthorized')){
    this.router.navigate(['/login']);
    }
  }
}
