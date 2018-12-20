import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamPaignListComponent } from './cam-paign-list.component';
import { CamPaignListRoutingModule } from './cam-paign-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    CamPaignListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    CamPaignListComponent
  ]
})
export class CamPaignListModule { }
