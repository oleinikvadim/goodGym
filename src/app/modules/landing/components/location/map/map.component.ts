import { Component } from '@angular/core';

@Component({
	selector: 'map',
	templateUrl: './map.component.html'
})
export class MapComponent {
	mapMarkerPosition = new google.maps.LatLng(40.679062, -74.101999);
	mapOptions: google.maps.MapOptions;
	markerOptions: google.maps.MarkerOptions;

	constructor() {
		this.mapOptions = {
			center: this.mapMarkerPosition,
			zoom: 13,
			disableDefaultUI: true,
			zoomControl: false,
			zoomControlOptions: {
				position: google.maps.ControlPosition.LEFT_CENTER,
			},
			styles: [
				{
					featureType: 'all',
					elementType: 'geometry',
					stylers: [
						{
							color: '#63b5e5',
						},
					],
				},
				{
					featureType: 'all',
					elementType: 'geometry.fill',
					stylers: [
						{
							color: '#f7911d',
						},
					],
				},
				{
					featureType: 'all',
					elementType: 'geometry.stroke',
					stylers: [
						{
							color: '#ffffff',
						},
					],
				},
				{
					featureType: 'all',
					elementType: 'labels.text.fill',
					stylers: [
						{
							gamma: 0.01,
						},
						{
							lightness: 20,
						},
						{
							color: '#212121',
						},
					],
				},
				{
					featureType: 'all',
					elementType: 'labels.text.stroke',
					stylers: [
						{
							saturation: -31,
						},
						{
							lightness: -33,
						},
						{
							weight: 2,
						},
						{
							gamma: 0.8,
						},
						{
							color: '#ffffff',
						},
					],
				},
				{
					featureType: 'all',
					elementType: 'labels.icon',
					stylers: [
						{
							visibility: 'off',
						},
					],
				},
				{
					featureType: 'landscape',
					elementType: 'geometry',
					stylers: [
						{
							lightness: 30,
						},
						{
							saturation: 30,
						},
					],
				},
				{
					featureType: 'poi',
					elementType: 'geometry',
					stylers: [
						{
							saturation: 20,
						},
					],
				},
				{
					featureType: 'poi.park',
					elementType: 'geometry',
					stylers: [
						{
							lightness: 20,
						},
						{
							saturation: -20,
						},
					],
				},
				{
					featureType: 'road',
					elementType: 'geometry',
					stylers: [
						{
							lightness: 10,
						},
						{
							saturation: -30,
						},
					],
				},
				{
					featureType: 'road',
					elementType: 'geometry.stroke',
					stylers: [
						{
							saturation: 25,
						},
						{
							lightness: 25,
						},
					],
				},
				{
					featureType: 'water',
					elementType: 'all',
					stylers: [
						{
							lightness: -20,
						},
						{
							color: '#212121',
						},
					],
				},
			],
		};

		this.markerOptions = {
			position: this.mapMarkerPosition,
			icon: {
				url: 'assets/images/google-marker.png',
			},
		};
	}
}
