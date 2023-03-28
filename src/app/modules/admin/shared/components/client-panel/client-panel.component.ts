import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { CLIENT_ID } from 'src/app/shared/helper';
import { Client } from 'src/app/shared/models/client.model';
import { GetClientListService } from 'src/app/shared/services';

@Component({
	selector: 'app-client-panel',
	templateUrl: './client-panel.component.html',
	styleUrls: ['./client-panel.component.scss'],
})
export class ClientPanelComponent implements OnInit {
	client: Client;
	closeSubject$ = new Subject();
	addClientData$ = new Subject<Client>();
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
	clientIdQwery: string | null;
	fakeLoader: boolean;
	loaderTimeOut = 400;
	public mask = {
		guide: true,
		showMask: true,
		mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]
	};
	private unsubscribe$ = new Subject<boolean>();
	constructor(
		private getClientListService: GetClientListService,
		private route: ActivatedRoute
	) {
	}

	ngOnInit(): void {
		this.clientIdQwery = this.route.snapshot.queryParamMap.get(CLIENT_ID);
		if (this.clientIdQwery) {
			this.fakeLoader = true;
		}

		this.getClientListService
			.getAll()
			.pipe(takeUntil(this.unsubscribe$))
			.subscribe((clients) => {
				this.client = clients.filter((client) => client.Id === this.clientIdQwery)[0];
				if (this.client) {
					this.init();
					setTimeout(() => this.fakeLoader = false, this.loaderTimeOut);
				} else {
					this.newClientInit();
				}
			});
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
			Id: Math.floor(Math.random() * 10),
			Balance: Math.floor(Math.random() * 20),
			IsActive: false,
			ExpirationDate: this.toDay,
		});
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
		this.addClientData$.next(this.formGroup.value);
		this.fakeLoader = true;
		setTimeout(() => {
			this.fakeLoader = false;
			this.closeSideNav();
		}, this.loaderTimeOut)
	}

	ngOnDestroy(): void {
		this.unsubscribe$.next(true);
		this.unsubscribe$.unsubscribe();
	}

}
