import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,
     RouterModule } from '@angular/router';

import { PlanningComponent } from './planning.component';

const routes: Routes = [
  {
    path: '',
    component: PlanningComponent,
    data: {
      title: 'My Planning'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class PlanningRoutingModule { }
