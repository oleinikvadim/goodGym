import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Client } from 'src/app/shared/models/client.model';

@Component({
	selector: 'app-client-panel',
	templateUrl: './client-panel.component.html',
	styleUrls: ['./client-panel.component.scss'],
})
export class ClientPanelComponent implements OnInit {
	private _client: Client;
	get client(): Client {
		return this._client;
	}
	set client(item: Client) {
		this._client = item;
	}
	closeSubject$ = new Subject();
	addClientData$ = new Subject<Client>();
	toDay = new Date();
	formGroup: FormGroup = new FormGroup({
		FirstName: new FormControl('', [Validators.required]),
		LastName: new FormControl('', [Validators.required]),
		DateOfBirth: new FormControl(null),
		Gender: new FormControl(null, [Validators.required]),
		Email: new FormControl(''),
		Address: new FormControl(''),
		Phones: new FormArray([]),
		IsActive: new FormControl(null),
		ExpirationDate: new FormControl(''),
		Balance: new FormControl(null),
		Id: new FormControl('')
	});

	constructor(
	) { }

	ngOnInit(): void {
		this._client ? this.init() : this.newClientInit();
	}

	private init(): void {
		this._client.Phones.forEach(phone => this.addPhone(phone));
		this.formGroup.reset(this._client);
		this.formGroup.patchValue({
			DateOfBirth: new Date(this._client.DateOfBirth),
			Balance: this._client.Balance,
			IsActive: this._client.IsActive,
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
		this.closeSideNav();
	}

}
