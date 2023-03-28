import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ADMIN_PASS } from '../helper';
import { Login } from '../models/client.model';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
	constructor(
		private router: Router,
	) { }

	login(login: Login): void {
		this.router.navigate(['/admin']);
		localStorage.setItem(ADMIN_PASS, JSON.stringify(login));
	}

	logout(): void {
		localStorage.removeItem(ADMIN_PASS);
	}

	isUserLogin(): boolean | null {
		return localStorage.getItem(ADMIN_PASS) ? true : false;
	}
}
