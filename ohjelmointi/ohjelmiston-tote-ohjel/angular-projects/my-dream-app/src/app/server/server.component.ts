import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    // template: '<app-server></app-server><app-server></app-server>',
    // template: ``,
    styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

    serverStatus:string = 'offline';

    // Random Show SERVER ID
    serverID = Math.floor(Math.random() * (10 - 1 + 1) + 0);

    constructor(){ }

    // ng INIT
    ngOnInit(): void {}
}
