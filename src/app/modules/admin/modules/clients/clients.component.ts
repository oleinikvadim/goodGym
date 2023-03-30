import { Component, HostBinding } from '@angular/core';

@Component({
	selector: 'app-clients',
	templateUrl: './clients.component.html',
})
export class ClinetsComponent {
	@HostBinding('class') class = 'content';
	constructor() { }
}
