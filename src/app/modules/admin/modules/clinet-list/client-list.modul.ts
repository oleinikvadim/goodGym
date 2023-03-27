import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClinetListComponent } from './clinet-list.component';

const routes: Routes = [
  {
    path: '', component: ClinetListComponent,
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ],
  exports: [],
  declarations: [
    ClinetListComponent,
  ],
  providers: [],
})
export class ClientListModule { }
