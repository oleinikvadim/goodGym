import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { SectionName } from 'src/app/shared/enum';
import { navigationAnimation } from 'src/app/shared/helper';

@Component({
	selector: 'landing',
	templateUrl: './landing.component.html',
	styleUrls: ['./landing.component.scss'],
	animations: [navigationAnimation()]

})
export class LandingComponent implements OnDestroy {
	fullPageConfig: any;
	fullpage_api: any;
	toggleMenuIsActive = false;
	sectionName = SectionName;
	activeAnchor: string | SectionName | null = this.sectionName.welcome;

	private unsubscribe$ = new Subject<boolean>();
	constructor(
		private route: ActivatedRoute,
	) {
		this.fullPageConfig = {
			anchors: Object.keys(this.sectionName),
			menu: '#menu',
			navigation: false,
			responsiveWidth: 768,
			responsiveHeight: 600,
		};
		this.route.fragment
			.pipe(takeUntil(this.unsubscribe$))
			.subscribe((fragment: string | SectionName | null) => this.activeAnchor = fragment);
	}


	toggleMenu(): void {
		this.toggleMenuIsActive = !this.toggleMenuIsActive;
		this.fullpage_api.setAllowScrolling(!this.toggleMenuIsActive);
		!this.toggleMenuIsActive
			? document.body.style.overflow = 'visible'
			: document.body.style.overflow = 'hidden';
	}

	getFullPageRef(fullPageRef: any): void {
		this.fullpage_api = fullPageRef;
	}

	ngOnDestroy(): void {
		this.unsubscribe$.next(true);
		this.unsubscribe$.unsubscribe();
	}

}


