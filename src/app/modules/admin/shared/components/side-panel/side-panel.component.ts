import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ADMIN_PASS, LOGIN } from 'src/app/shared/helper';
import { ConfirmDialogService } from 'src/app/shared/modules/confirm-dialog/confirm-dialog.service';

@Component({
	selector: 'side-panel',
	templateUrl: './side-panel.component.html',
	styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnDestroy {
	private unsubscribe$ = new Subject<boolean>();

	constructor(
		private dialogService: ConfirmDialogService,
		private router: Router,
	) { }

	logoutDiaolg() {
		const options = {
			title: 'Leave admin panel',
			message: 'Are you sure you want to leave?',
			cancelText: 'Cancel',
			confirmText: 'Yes'
		};

		this.dialogService.open(options);

		this.dialogService
			.confirmed()
			.pipe(takeUntil(this.unsubscribe$))
			.subscribe(confirmed => {
				if (confirmed) {
					this.logOut(LOGIN);
				}
			});
	}

	goToLandingDiaolg() {
		const options = {
			title: 'Leave admin panel',
			message: 'Are you sure you want go to Good Gym Page?',
			cancelText: 'Cancel',
			confirmText: 'Yes'
		};

		this.dialogService.open(options);

		this.dialogService
			.confirmed()
			.pipe(takeUntil(this.unsubscribe$))
			.subscribe(confirmed => {
				if (confirmed) {
					this.logOut('');
				}
			});
	}

	ngOnDestroy(): void {
		this.unsubscribe$.next(true);
		this.unsubscribe$.unsubscribe();
	}

	private logOut(path: string) {
		localStorage.removeItem(ADMIN_PASS);
		this.router.navigate([path]);
	}

}
