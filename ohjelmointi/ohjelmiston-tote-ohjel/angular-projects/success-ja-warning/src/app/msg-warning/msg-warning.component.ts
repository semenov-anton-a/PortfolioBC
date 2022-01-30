import { Component, OnInit } from '@angular/core';


import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-msg-warning',
  templateUrl: './msg-warning.component.html',
  styleUrls: ['./msg-warning.component.css']
})
export class MsgWarningComponent implements OnInit {

  icons = [
    faSkullCrossbones
  ];

  title = 'Warning';

  onMyClick(){
    this.title = "A said DONT POUSH";
    return ;
  };

  constructor() { }

  ngOnInit(): void {
  }

}
