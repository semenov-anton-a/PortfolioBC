import { Component, OnInit } from '@angular/core';


import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-msg-success',
  templateUrl: './msg-success.component.html',
  styleUrls: ['./msg-success.component.css']
})

export class MsgSuccessComponent implements OnInit {

  constructor() { }

  icons = [
    faThumbsUp
  ];

  title = 'Success';

  onMyClick(){
    this.title = "A said DONT POUSH";
    return ;
  };

  ngOnInit(): void {
  }

}
