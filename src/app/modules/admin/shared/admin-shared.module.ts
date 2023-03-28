import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClientPanelComponent, SidePanelComponent } from './components';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    SidePanelComponent,
    ClientPanelComponent,
    SharedModule,
  ],
  declarations: [
    SidePanelComponent,
    ClientPanelComponent
  ],
})
export class AdminSharedModule { }
