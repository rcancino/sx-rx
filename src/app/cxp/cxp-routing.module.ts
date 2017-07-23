import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CxpPageComponent} from './cxp-page.component';
import {RequisicionesComponent} from './requisiciones/requisiciones.component';
import {FacturasComponent} from './facturas/facturas.component';
import {PagosComponent} from './pagos/pagos.component';
import {ContrarecibosComponent} from './contrarecibos/contrarecibos.component';
import {AnticiposComponent} from './anticipos/anticipos.component';

const routes: Routes = [
  {
    path: '',
    component: CxpPageComponent,
    children: [
      {
        path: 'facturas',
        component: FacturasComponent
      },
      {
        path: 'requisiciones',
        component: RequisicionesComponent
      },
      {
        path: 'pagos',
        component: PagosComponent
      },
      {
        path: 'contrarecibos',
        component: ContrarecibosComponent
      },
      {
        path: 'anticipos',
        component: AnticiposComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CxpRoutingModule { }
