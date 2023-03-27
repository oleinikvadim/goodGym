import { Component } from '@angular/core';
import { ADMIN_PASS } from 'src/app/shared/helper';

@Component({
	selector: 'app-side-panel',
	templateUrl: './side-panel.component.html',
	styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent {
	constructor() { }
	logOut() {
		localStorage.removeItem(ADMIN_PASS);
	}

}
