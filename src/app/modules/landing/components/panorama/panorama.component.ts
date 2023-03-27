import { Component, OnInit } from '@angular/core';
@Component({
	selector: 'app-panorama',
	templateUrl: './panorama.component.html',
	styleUrls: ['./panorama.component.scss']
})
export class PanoramaComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
		(window as any).pannellum.viewer('panoramaLink', {
			type: 'equirectangular',
			panorama: 'assets/images/panorama/panorama.jpg',
			autoLoad: true,
			showZoomCtrl: false,
			mouseZoom: false,
		});
	}

}
