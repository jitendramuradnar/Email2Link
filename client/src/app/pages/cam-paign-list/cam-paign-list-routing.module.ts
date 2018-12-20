import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CamPaignListComponent } from './cam-paign-list.component';

const routes: Routes = [
  {
    path: '',
    component: CamPaignListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CamPaignListRoutingModule { }
