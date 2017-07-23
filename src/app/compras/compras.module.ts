import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';

import { ComprasRoutingModule } from './compras-routing.module';
import { ComprasPageComponent } from './compras-page.component';
import { AtendidasComponent } from './atendidas/atendidas.component';
import { PendientesComponent } from './pendientes/pendientes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlcanceComponent } from './alcance/alcance.component';
import { RecepcionesComponent } from './recepciones/recepciones.component';
import { ExistenciasComponent } from './existencias/existencias.component';
import { ComprasListComponent } from './shared/compras-list/compras-list.component';
import { CompraViewComponent } from './shared/compra-view/compra-view.component';

@NgModule({
  imports: [
    SharedModule,
    ComprasRoutingModule
  ],
  declarations: [ComprasPageComponent, AtendidasComponent, PendientesComponent, DashboardComponent, AlcanceComponent, RecepcionesComponent, ExistenciasComponent, ComprasListComponent, CompraViewComponent]
})
export class ComprasModule { }
