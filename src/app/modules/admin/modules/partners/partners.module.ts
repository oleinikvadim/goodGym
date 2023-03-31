import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { PartnerListComponent, PartnerManagePanelComponent } from './components';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: PartnerListComponent }]),
    SharedModule,
  ],
  declarations: [
    PartnerListComponent,
    PartnerManagePanelComponent
  ]
})
export class PartnersModule { }
