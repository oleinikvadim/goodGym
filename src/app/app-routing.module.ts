import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/helper/auth.guard';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./modules/index').then(m => m.LandingModule)
	},
	{
		path: 'login',
		loadChildren: () => import('./modules/index').then(m => m.LoginModule)
	},
	{
		path: 'admin',
		canActivate: [AuthGuard],
		loadChildren: () => import('./modules/index').then(m => m.AdminModule)
	},
	{ path: '**', redirectTo: '' }
]
@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
