import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ComprasPageComponent} from './compras-page.component';
import {PendientesComponent} from './pendientes/pendientes.component';
import {AtendidasComponent} from './atendidas/atendidas.component';
import {AlcanceComponent} from './alcance/alcance.component';
import {ExistenciasComponent} from './existencias/existencias.component';
import {RecepcionesComponent} from './recepciones/recepciones.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CompraViewComponent} from './shared/compra-view/compra-view.component';

const routes: Routes = [

  {
    path: '',
    component: ComprasPageComponent,
    children: [
      {
        path: 'pendientes',
        component: PendientesComponent,
        children: [
          {
            path: 'show/:id',
            component: CompraViewComponent
          }
        ]
      },
      {
        path: 'atendidas',
        component: AtendidasComponent
      },
      {
        path: 'recepciones',
        component: RecepcionesComponent
      },
      {
        path: 'alcance',
        component: AlcanceComponent,
      },
      {
        path: 'existencias',
        component: ExistenciasComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo: 'pendientes',
        pathMatch: 'full'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComprasRoutingModule { }
