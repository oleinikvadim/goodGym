import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'sing-up',
	templateUrl: './sing-up.component.html',
	styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent {
	form: FormGroup;

	constructor(
		private _formBuilder: FormBuilder
	) {
		this.form = this.initForm();
	}

	private initForm(): FormGroup {
		return this._formBuilder.group({
			email: ['', Validators.required],
		});
	}
}
