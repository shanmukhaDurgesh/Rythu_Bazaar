import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filelist',
  templateUrl: './filelist.component.html',
  styleUrls: ['./filelist.component.scss']
})
export class FilelistComponent implements OnInit {
  @Input() title: string;
  @Input() children: any[];
  check:boolean;
  constructor() { }

  ngOnInit() {
  }

}
