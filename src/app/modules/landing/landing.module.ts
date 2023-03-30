import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
	GoodDayComponent,
	LocationComponent,
	PanoramaComponent,
	WelcomeComponent,
	SliderSectionComponent,
	MapComponent,
	SingUpComponent,
	WorkoutComponent
} from './components';
import { LandingComponent } from './landing.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
	imports: [
		RouterModule.forChild([{ path: '', component: LandingComponent }]),
		SharedModule,
	],
	exports: [],
	declarations: [
		LandingComponent,
		WelcomeComponent,
		GoodDayComponent,
		SliderSectionComponent,
		PanoramaComponent,
		LocationComponent,
		MapComponent,
		SingUpComponent,
		WorkoutComponent,
		FooterComponent,
	],
	providers: [],
})
export class LandingModule { }
