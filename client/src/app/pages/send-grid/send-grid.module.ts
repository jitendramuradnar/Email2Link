import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendGridComponent } from './send-grid.component';
import { SendGridRoutingModule } from './send-grid-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SendGridRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    SendGridComponent
  ]
})
export class SendGridModule { }
