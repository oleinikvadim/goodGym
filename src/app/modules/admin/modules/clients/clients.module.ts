import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClientListComponent, ClientManagePanelComponent } from './components';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: ClientListComponent }]),
    SharedModule,
  ],
  declarations: [
    ClientListComponent,
    ClientManagePanelComponent,
  ]
})
export class ClientsModule { }
