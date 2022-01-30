import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers',
  selector: '[app-servers]',
  styleUrls: ['./servers.component.css'],
  templateUrl: './servers.component.html',
})
export class ServersComponent implements OnInit {

  alloweNewServer: boolean = false;
  timer:number = 2000;

  constructor() {
    setTimeout(() => {
      this.alloweNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

}
