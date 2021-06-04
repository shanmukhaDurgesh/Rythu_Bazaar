import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-layout',
  templateUrl: './body-layout.component.html',
  styleUrls: ['./body-layout.component.scss']
})
export class BodyLayoutComponent implements OnInit {
  collapedSideBar: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  receiveCollapsed($event) {
    this.collapedSideBar = $event;
}

}
