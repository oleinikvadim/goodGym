import { Component, HostBinding, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { GenderEnum } from 'src/app/shared/enum';
import { CLIENT_ID, FAKE_LOADER_TIME } from 'src/app/shared/helper';
import { Client } from 'src/app/shared/models/client.model';
import { ConfirmDialogService, MockApiService } from 'src/app/shared/services';

@Component({
	selector: 'client-manage-panel',
	templateUrl: './client-manage-panel.component.html'
})
export class ClientManagePanelComponent implements OnInit {
	@HostBinding('class') class = 'panel';
	client: Client;
	closeSubject$ = new Subject();
	clientAction$ = new Subject<boolean>();
	toDay = new Date();
	formGroup: FormGroup = new FormGroup({
		FirstName: new FormControl('', [Validators.required]),
		LastName: new FormControl('', [Validators.required]),
		DateOfBirth: new FormControl(null),
		Gender: new FormControl(null, [Validators.required]),
		Email: new FormControl('', [Validators.required, Validators.email]),
		Address: new FormControl(''),
		Phones: new FormArray([]),
		IsActive: new FormControl(null),
		ExpirationDate: new FormControl(''),
		Balance: new FormControl(null),
		Id: new FormControl('')
	});
	clientId: string | null;
	fakeLoader: boolean;
	genderEnum = GenderEnum;
	color = 'red';
	private unsubscribe$ = new Subject<boolean>();
	constructor(
		private route: ActivatedRoute,
		private mockApiService: MockApiService,
		private dialogService: ConfirmDialogService,
	) {
	}

	ngOnInit(): void {
		this.clientId = this.route.snapshot.queryParamMap.get(CLIENT_ID);
		if (this.clientId) {
			this.fakeLoader = true;
		}

		this.mockApiService
			.getClients()
			.pipe(takeUntil(this.unsubscribe$))
			.subscribe((clients) => {
				this.client = clients.filter((client) => client.Id === this.clientId)[0];
				if (this.client) {
					this.init();
					setTimeout(() => this.fakeLoader = false, FAKE_LOADER_TIME);
				} else {
					this.newClientInit();
				}
			});
	}

	ngOnDestroy(): void {
		this.unsubscribe$.next(true);
		this.unsubscribe$.unsubscribe();
	}

	get getFormsPhonesArray(): FormArray {
		return this.formGroup.controls.Phones as FormArray;
	}

	addPhone(phone?: string): void {
		phone
			? this.getFormsPhonesArray.push(new FormControl(phone))
			: this.getFormsPhonesArray.push(new FormControl(''));
	}

	deletePhone(phoneId: number): void {
		this.getFormsPhonesArray.removeAt(phoneId);
	}

	closeSideNav(): void {
		this.closeSubject$.next(true);
		this.formGroup.reset();
	}

	onSubmit(): void {
		this.fakeLoader = true;
		this.mockApiService
			.addClient(this.formGroup.getRawValue())
			.pipe(takeUntil(this.unsubscribe$))
			.subscribe(() => {
				this.clientAction$.next(true);
			});
		this.loadAndCloseSideNav();
	}

	deleteClientDialog(client: Client) {
		const options = {
			title: 'Delete client',
			message: `Are you sure you want to delete ${client.FirstName} ${client.LastName}?`,
			cancelText: 'Cancel',
			confirmText: 'Yes'
		};

		this.dialogService.open(options);

		this.dialogService
			.confirmed()
			.pipe(takeUntil(this.unsubscribe$))
			.subscribe(confirmed => {
				if (confirmed) {
					this.mockApiService.deleteClient(this.client);
					this.clientAction$.next(true);
					this.fakeLoader = true;
					this.loadAndCloseSideNav();
				}
			});
	}

	private loadAndCloseSideNav(): void {
		setTimeout(() => {
			this.fakeLoader = false;
			this.closeSideNav()
		}, FAKE_LOADER_TIME);
	}

	private init(): void {
		this.client.Phones.forEach(phone => this.addPhone(phone));
		this.formGroup.reset(this.client);
		this.formGroup.patchValue({
			DateOfBirth: new Date(this.client.DateOfBirth),
			Balance: this.client.Balance,
			IsActive: this.client.IsActive,
			ExpirationDate: this.toDay,
		});
	}

	private newClientInit(): void {
		this.formGroup.reset();
		this.formGroup.patchValue({
			Gender: this.genderEnum.MALE,
			Id: Math.floor(Math.random() * 10).toString(),
			Balance: Math.floor(Math.random() * 20),
			IsActive: false,
			ExpirationDate: this.toDay,
		});
	}

}
