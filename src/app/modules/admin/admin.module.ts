import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminPanelComponent } from './admin-panel.component';
import { AdminSharedModule } from './shared/admin-shared.module';

const routes: Routes = [
	{
		path: '', component: AdminPanelComponent,
		children: [
			{
				path: 'clients',
				loadChildren: () => import('./modules/index').then(m => m.ClientListModule)
			},
			{
				path: 'list',
				loadChildren: () => import('./modules/index').then(m => m.ClientListModule)
			},
			{
				path: '',
				redirectTo: 'clients',
				pathMatch: 'full'
			}
		],
	},
]

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		SharedModule,
		AdminSharedModule
	],
	exports: [],
	declarations: [
		AdminPanelComponent
	]
})
export class AdminModule { }
