import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AdminPanelComponent } from './admin-panel.component';
import {
	ClientPanelComponent,
	SidePanelComponent,
	TableComponent,
} from './components';

@NgModule({
	imports: [
		RouterModule.forChild([{ path: '', component: AdminPanelComponent }]),
		SharedModule,
	],
	exports: [],
	declarations: [
		AdminPanelComponent,
		SidePanelComponent,
		ClientPanelComponent,
		TableComponent
	],
	providers: [],
})
export class AdminModule { }
