import { NgModule } from '@angular/core';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { SwiperModule } from 'swiper/angular';
import { GoogleMapsModule } from '@angular/google-maps';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogModule } from './modules';

const MATERIAL_COMPONENTS = [
	MatInputModule,
	MatButtonModule,
	MatIconModule,
	MatSidenavModule,
	MatButtonToggleModule,
	MatTableModule,
	MatPaginatorModule,
	MatSortModule,
	MatDatepickerModule,
	MatNativeDateModule,
	MatRadioModule,
	MatSlideToggleModule,
	MatMenuModule,
	MatProgressSpinnerModule,
	MatDialogModule,
	MatButtonModule,
]

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		HttpClientModule,
		ReactiveFormsModule,
		AngularFullpageModule,
		SwiperModule,
		GoogleMapsModule,
		MatInputModule,
		MATERIAL_COMPONENTS,
		ConfirmDialogModule
	],
	exports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		AngularFullpageModule,
		SwiperModule,
		GoogleMapsModule,
		MATERIAL_COMPONENTS,
		ConfirmDialogModule
	],
	declarations: [
	],
	providers: [
		MatDatepickerModule,
	],
})
export class SharedModule { }
