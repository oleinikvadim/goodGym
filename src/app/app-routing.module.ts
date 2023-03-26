import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/helper/auth.guard';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)
	},
	{
		path: 'login',
		loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
	},
	{
		path: 'admin-panel',
		canActivate: [AuthGuard],
		loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
	},
	{ path: '**', redirectTo: '' }
]
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
