import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SendGridComponent } from './send-grid.component';

const routes: Routes = [
  {
    path: '',
    component: SendGridComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SendGridRoutingModule { }
