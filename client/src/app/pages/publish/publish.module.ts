import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublishComponent } from './publish.component';
import { PublishRoutingModule } from './publish-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    PublishRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    PublishComponent
  ]
})
export class PublishModule { }
