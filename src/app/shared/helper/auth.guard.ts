import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from '../services';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
	constructor(
		private router: Router,
		private authenticationService: AuthenticationService,
	) { }

	canActivate(): boolean {
		const current = this.authenticationService.isUserLogin();
		if (current) {
			return true;
		} else {
			this.router.navigate(['/login']);
			return false
		}
	}
}
