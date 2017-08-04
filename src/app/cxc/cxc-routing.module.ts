import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CxcMainPageComponent} from './_pages/cxc-main-page/cxc-main-page.component';
import {NcargoPageComponent} from './_pages/ncargo-page/ncargo-page.component';
import {NcargoCreateComponent} from './_pages/ncargo-create/ncargo-create.component';

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
          },
          {
            path: 'notasDeCargo/create',
            component: NcargoCreateComponent
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
