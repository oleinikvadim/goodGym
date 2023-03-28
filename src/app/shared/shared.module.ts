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
import { SpinnerComponent } from './components';
import { IConfig, NgxMaskModule } from 'ngx-mask';

export const options: Partial<null | IConfig> | (() => Partial<IConfig>) = null;

const REUSE_COMPONENT = [
	SpinnerComponent
];

const REUSE_MODULE = [
	ConfirmDialogModule,
	NgxMaskModule.forRoot(),
];

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
];

const LIBRIARY = [
	AngularFullpageModule,
	SwiperModule,
	GoogleMapsModule
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		HttpClientModule,
		ReactiveFormsModule,
		MATERIAL_COMPONENTS,
		REUSE_MODULE,
		LIBRIARY,
	],
	exports: [
		CommonModule,
		FormsModule,
		HttpClientModule,
		ReactiveFormsModule,
		MATERIAL_COMPONENTS,
		REUSE_MODULE,
		REUSE_COMPONENT,
		LIBRIARY,
	],
	declarations: [
		REUSE_COMPONENT
	],
	providers: [
		MatDatepickerModule,
	],
})
export class SharedModule { }
