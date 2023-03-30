import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListComponent, ManagementComponent } from './components';
import { PartnersComponent } from './partners.component';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: PartnersComponent }]),
    SharedModule,
  ],
  declarations: [
    PartnersComponent,
    ListComponent,
    ManagementComponent
  ]
})
export class PartnersModule { }
