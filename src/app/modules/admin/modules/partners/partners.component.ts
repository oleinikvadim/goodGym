import { Component, HostBinding } from '@angular/core';

@Component({
	selector: 'clients',
	templateUrl: './partners.component.html',
})
export class PartnersComponent {
	@HostBinding('class') class = 'content';
	constructor() { }
}
