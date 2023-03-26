import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';

import { Subject, takeUntil } from 'rxjs';
import { Client } from 'src/app/shared/models/client.model';
import { GetClientListService } from 'src/app/shared/services';
import { ClientPanelComponent } from '../client-panel/client-panel.component';


@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
	@ViewChild(MatSort) set matSort(sort: MatSort) {
		this.dataSource.sort = sort;
	}
	@ViewChild('clientTable', { static: true }) clientTable!: MatTable<Client>;
	displayedColumns: string[] = ['FirstName', 'LastName', 'IsActive', 'Gender', 'ExpirationDate', 'CurrentBalance'];
	dataSource = new MatTableDataSource<Client>();
	fakeLoader = false;
	private overlayRef!: OverlayRef;
	private unsubscribe$ = new Subject<boolean>();
	constructor(
		private getClientListService: GetClientListService,
		private overlay: Overlay,
		private elementRef: ElementRef
	) {
	}

	ngOnInit(): void {
		this.getClientListService
			.getAll()
			.pipe(takeUntil(this.unsubscribe$))
			.subscribe(response => {
				this.fakeLoader = true;
				setTimeout(() => {
					this.fakeLoader = false;
					this.dataSource.data = response;
				}, 1000)
			});
	}

	displayOverlay(data?: Client): void {
		this.overlayRef = this.overlay.create({
			hasBackdrop: true,
			panelClass: 'client-panel',
			height: '100%',
			positionStrategy: this.overlay
				.position()
				.flexibleConnectedTo(this.elementRef)
				.withPositions([
					{
						originX: 'end',
						originY: 'top',
						overlayX: 'end',
						overlayY: 'bottom',
					}
				])
		});

		this.overlayRef
			.backdropClick()
			.pipe(takeUntil(this.unsubscribe$))
			.subscribe(() => {
				this.overlayRef.detach();
			});

		const popupComponent = this.overlayRef.attach(new ComponentPortal(ClientPanelComponent)).instance;
		popupComponent.client = data!;

		popupComponent.addClientData$
			.pipe(takeUntil(this.unsubscribe$))
			.subscribe(clientChanges => {
				this.newDataSource(clientChanges);
			})

		popupComponent.closeSubject$
			.pipe(takeUntil(this.unsubscribe$))
			.subscribe(() => this.overlayRef.dispose());
	}

	newDataSource(client: Client): void {
		this.fakeLoader = true;
		const findIndex = this.dataSource.data.findIndex(x => x.Id === client.Id);
		!findIndex ? this.dataSource.data[findIndex] = client : this.dataSource.data.unshift(client);
		setTimeout(() => {
			this.fakeLoader = false;
			this.clientTable?.renderRows();
			this.dataSource._updateChangeSubscription();
		}, 1000)
	}

	applyFilter(event: Event): void {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}

	ngOnDestroy(): void {
		this.unsubscribe$.next(true);
		this.unsubscribe$.unsubscribe();
	}

}
