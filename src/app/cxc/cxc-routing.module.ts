import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CxcMainPageComponent} from './_pages/cxc-main-page/cxc-main-page.component';
import {NcargoPageComponent} from './_pages/ncargo-page/ncargo-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CxcMainPageComponent,
        children: [
          {
            path: 'notasDeCargo',
            component: NcargoPageComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CxcRoutingModule { }
