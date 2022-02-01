import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers',
  selector: '[app-servers]',
  styleUrls: ['./servers.component.css'],
  templateUrl: './servers.component.html',
})
export class ServersComponent implements OnInit {

  alloweNewServer: boolean = false;
  serverCreationStatus = "No server wass created !";

  serverName: string = "Test server";
  
  
  timer:number = 2000;
  
  constructor() {
      setTimeout(() => {
        this.alloweNewServer = true;
      }, this.timer);
  }

  onCreateServer(){
    this.serverCreationStatus = "Server was created! Server name is " + this.serverName;
  }

  onUpdateServerName( event:any ){
    this.serverName = (<HTMLInputElement>event.target).value;
    //console.log(event)
  }

  ngOnInit(): void {
  }

}
