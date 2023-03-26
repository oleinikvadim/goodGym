import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ADMIN_PASS } from '../shared/helper';
import { AuthenticationService } from '../shared/services';

export enum LoginKey {
	admin = 'admin',
}

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	form: FormGroup = new FormGroup({
		userName: new FormControl('', [Validators.required, this.customValidator]),
		password: new FormControl('', [Validators.required, this.customValidator]),
	});
	hide = true;
	fakeLoader = false;
	constructor(
		private authenticationService: AuthenticationService,
	) {
	}

	ngOnInit(): void {
		this.form.reset({
			userName: 'admin',
			password: 'admin',
		});
	}

	get controls(): { [key: string]: AbstractControl } {
		return this.form.controls
	}

	submit(): void {
		this.fakeLoader = true;
		if (this.controls.userName.value === LoginKey.admin && this.controls.password.value === LoginKey.admin) {
			localStorage.setItem(ADMIN_PASS, JSON.stringify(this.form.value));

			setTimeout(() => {
				this.fakeLoader = false;
				this.authenticationService.login(this.form.value);
			}, 2000)

		} else {
			localStorage.removeItem(ADMIN_PASS);
			this.authenticationService.logout();
			this.form.markAllAsTouched();
			this.form.updateValueAndValidity();
			return;
		}
	}

	private customValidator(control: AbstractControl): { [key: string]: any } | null {
		if (control.value && control.value !== LoginKey.admin) {
			return { 'nameIsInvalid': true };
		}
		return null;
	}

}
