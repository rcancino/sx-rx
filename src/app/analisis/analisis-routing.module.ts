import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AnalisisPageComponent} from './analisis-page.component';

const routes: Routes = [
  {
    path: '',
    component: AnalisisPageComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalisisRoutingModule { }
