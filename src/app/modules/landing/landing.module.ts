import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
	GoodDaySectionComponent,
	LocationComponent,
	PanoramaComponent,
	SectionWelcomeComponent,
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
		SectionWelcomeComponent,
		GoodDaySectionComponent,
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
