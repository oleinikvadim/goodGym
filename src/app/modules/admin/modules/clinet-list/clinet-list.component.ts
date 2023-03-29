import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, ElementRef, HostBinding, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { CLIENT_ID, FAKE_LOADER_TIME } from 'src/app/shared/helper';
import { Client } from 'src/app/shared/models/client.model';
import { MockApiService } from 'src/app/shared/services';
import { ClientPanelComponent } from '../../shared/components/client-panel/client-panel.component';


@Component({
	selector: 'app-clinet-list',
	templateUrl: './clinet-list.component.html',
	styleUrls: ['./clinet-list.component.scss']
})
export class ClinetListComponent implements OnInit {
	@HostBinding('class') class = 'content';
	@ViewChild(MatSort) set matSort(sort: MatSort) {
		this.dataSource.sort = sort;
	}
	@ViewChild('clientTable', { static: true }) clientTable!: MatTable<Client>;
	displayedColumns: string[] = ['FirstName', 'LastName', 'IsActive', 'Gender', 'ExpirationDate', 'Balance'];
	dataSource = new MatTableDataSource<Client>();
	fakeLoader = false;
	clientIdQwery: string | null;
	clientTitle: string | undefined;
	private overlayRef!: OverlayRef;
	private unsubscribe$ = new Subject<boolean>();
	constructor(
		private overlay: Overlay,
		private elementRef: ElementRef,
		private router: Router,
		private route: ActivatedRoute,
		private mockApiService: MockApiService
	) {
		this.clientIdQwery = this.route.snapshot.queryParamMap.get(CLIENT_ID);
		if (this.clientIdQwery) {
			this.displayOverlay();
		}

		this.clientTitle = this.route.parent?.snapshot.url[0].path;
	}

	ngOnInit(): void {
		this.getMockData();
	}

	ngOnDestroy(): void {
		this.unsubscribe$.next(true);
		this.unsubscribe$.unsubscribe();
	}

	displayOverlay(data?: Client): void {
		if (data) {
			this.setQweryParams(data?.Id);
		}

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
				this.setQweryParams();
				this.overlayRef.detach();
			});

		const popupComponent = this.overlayRef.attach(new ComponentPortal(ClientPanelComponent)).instance;

		popupComponent.clientAction$
			.pipe(takeUntil(this.unsubscribe$))
			.subscribe(() => {
				this.setQweryParams();
				this.getMockData();
				setTimeout(() => {
					this.clientTable?.renderRows();
					this.dataSource._updateChangeSubscription();
				}, FAKE_LOADER_TIME)
			})

		popupComponent.closeSubject$
			.pipe(takeUntil(this.unsubscribe$))
			.subscribe(() => {
				this.setQweryParams();
				this.overlayRef.dispose();
			});
	}

	applyFilter(event: Event): void {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}

	private setQweryParams(params?: string): void {
		this.router.navigate([], {
			queryParams: {
				[`${CLIENT_ID}`]: params ? params : null,
			},
		});
	}

	private getMockData(): void {
		this.mockApiService
			.getClients()
			.pipe(takeUntil(this.unsubscribe$))
			.subscribe((response) => {
				this.fakeLoader = true;
				setTimeout(() => {
					this.fakeLoader = false;
					this.dataSource.data = response;
				}, FAKE_LOADER_TIME)
			});
	}

}
