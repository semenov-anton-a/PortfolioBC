import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-username-check',
	templateUrl: './username-check.component.html',
	styleUrls: ['./username-check.component.css']
})
export class UsernameCheckComponent implements OnInit {

	userName: string  = "";
	resetButton: boolean = true;
	validStatus: boolean = false;
	validStatusText: string = "";


	constructor() {
		this.validStatusToggle();
		console.log(this.userName)
	}

	ngOnInit(): void { }

	
	onResetButtonClick() {
		this.resetButton = true;
		this.userName = "";
	}

	checkUserNameLength(userName: string): boolean {
		if( userName.length >= 5 && userName.length <= 10 )
		{
			this.validStatusToggle(true);
			return true;
		}

		this.validStatusToggle(false);
		return false;
	}


	private validStatusToggle( toggle: boolean = this.validStatus ): void {
		this.validStatus = toggle;
		this.validStatusText = this.validStatus ? "Success":"Fail";
	}

}
