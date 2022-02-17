import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-display-detales',
    templateUrl: './display-detales.component.html',
    styleUrls: ['./display-detales.component.css']
})
export class DisplayDetalesComponent implements OnInit {
    // numbers: number[] = [];

    // constructor() {
    //   this.numbers = new Array<number>(10)
    // }


    constructor() { }

    ngOnInit(): void { }


    maxCount = 5
    buttonPressVCount: number = 0;

    // Press button
    toPressAButton() {
        if( this.buttonPressVCount != this.maxCount )
        {
            this.buttonPressVCount++ ;
            console.log("OK");
            return;
        }

        console.log("FAIL")
        return;
    }

    toToggleText() : boolean {
        if( this.buttonPressVCount % 2 == 0 )
        {
            console.log("ok toToggleText")
            return false;
        }
        console.log("fail toToggleText")
        return true;
    }


    pressGameReset(){
        this.buttonPressVCount = 0;
    }


}
