import { Component } from '@angular/core';
import SwiperCore, { SwiperOptions, Pagination, Thumbs } from 'swiper';
SwiperCore.use([Pagination, Thumbs]);

@Component({
	selector: 'app-slider-section',
	templateUrl: './slider-section.component.html',
	styleUrls: ['./slider-section.component.scss']
})
export class SliderSectionComponent {
	thumbsSwiper: any;
	config: SwiperOptions = {
		slidesPerView: 1,
		spaceBetween: 50,
		speed: 800,
		loop: true,
		breakpoints: {
			992: {
				autoHeight: false,
			}
		}
	};

	welcomeBottomConfig: SwiperOptions = {
		slidesPerView: 3,
	}

	constructor() { }

}
