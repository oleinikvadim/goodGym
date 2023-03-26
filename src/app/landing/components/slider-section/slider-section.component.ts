import { Component } from '@angular/core';
import SwiperCore, { SwiperOptions, Pagination, Thumbs, Autoplay } from 'swiper';
SwiperCore.use([Pagination, Thumbs, Autoplay]);

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
		scrollbar: {
			draggable: true
		},
		breakpoints: {
			992: {
				autoHeight: false,
			}
		},
		autoplay: {
			delay: 3000,
			disableOnInteraction: false
		}
	};

	welcomeBottomConfig: SwiperOptions = {
		slidesPerView: 3,
	}

	constructor() { }

}
