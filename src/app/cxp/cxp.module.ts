import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CxpRoutingModule } from './cxp-routing.module';
import { CxpPageComponent } from './cxp-page.component';
import {FacturasComponent} from './facturas/facturas.component';
import {ContrarecibosComponent} from './contrarecibos/contrarecibos.component';
import {PagosComponent} from './pagos/pagos.component';
import {RequisicionesComponent} from './requisiciones/requisiciones.component';
import {AnticiposComponent} from './anticipos/anticipos.component';


@NgModule({
  imports: [
    SharedModule,
    CxpRoutingModule
  ],
  declarations: [CxpPageComponent, FacturasComponent, ContrarecibosComponent, PagosComponent,
    RequisicionesComponent,
    AnticiposComponent
  ]
})
export class CxpModule { }
