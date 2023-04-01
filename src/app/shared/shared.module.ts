import { NgModule } from '@angular/core';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import {
	ANGULAR_MODULES,
	LIBRARY,
	MATERIAL_COMPONENTS,
	PIPES,
	SERVICES,
	REUSE_COMPONENT
} from './shared-exports';

export const options: Partial<null | IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
	imports: [
		...ANGULAR_MODULES,
		...MATERIAL_COMPONENTS,
		...LIBRARY,
		NgxMaskModule.forRoot(),
	],
	exports: [
		...ANGULAR_MODULES,
		...MATERIAL_COMPONENTS,
		...REUSE_COMPONENT,
		...LIBRARY,
		...PIPES,
	],
	declarations: [
		...REUSE_COMPONENT,
		...PIPES,
	],
	providers: [
		...SERVICES,
	],
})
export class SharedModule { }
