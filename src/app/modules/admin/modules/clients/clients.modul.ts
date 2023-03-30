import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClinetsComponent } from './clients.component';
import { ListComponent, ManagementComponent } from './components';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: ClinetsComponent }]),
    SharedModule,
  ],
  declarations: [
    ClinetsComponent,
    ListComponent,
    ManagementComponent
  ]
})
export class ClientsModule { }
