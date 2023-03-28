import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { SectionName } from 'src/app/shared/enum';
import { media, navigationAnimation } from 'src/app/shared/helper';

@Component({
	selector: 'app-landing',
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
			responsiveHeight: 500,
		};
		this.route.fragment
			.pipe(takeUntil(this.unsubscribe$))
			.subscribe((fragment: string | SectionName | null) => this.activeAnchor = fragment);
	}


	toggleMenu(): void {
		this.isMobileMenuOpen();
		this.toggleMenuIsActive = !this.toggleMenuIsActive;
		this.fullpage_api.setAllowScrolling(!this.toggleMenuIsActive);
	}

	getFullPageRef(fullPageRef: any): void {
		this.fullpage_api = fullPageRef;
	}

	isMobileMenuOpen(): void {
		media('(max-width: 768px)')
			.pipe(takeUntil(this.unsubscribe$))
			.subscribe((matches) => {
				if (matches) {
					!this.toggleMenuIsActive ?
						document.body.style.overflow = 'hidden' :
						document.body.style.overflow = 'auto';
				}
			});
	}

	ngOnDestroy(): void {
		this.unsubscribe$.next(true);
		this.unsubscribe$.unsubscribe();
	}

}


