import { NgModule } from '@angular/core';

import {SharedModule} from '../shared/shared.module';
import { CxcRoutingModule } from './cxc-routing.module';
import { CxcMainPageComponent } from './_pages/cxc-main-page/cxc-main-page.component';
import { NcargoPageComponent } from './_pages/ncargo-page/ncargo-page.component';
import { NotasDeCargoService } from './services/notas-de-cargo.service';
import { NotasDeCargoListComponent } from './_components/notas-de-cargo-list/notas-de-cargo-list.component';
import { NotaDeCargoInfoComponent } from './_components/nota-de-cargo-info/nota-de-cargo-info.component';
import { NcargoCreateComponent } from './_pages/ncargo-create/ncargo-create.component';
import { NcargoFormComponent } from './_components/ncargo-form/ncargo-form.component';
import { ClienteFieldComponent } from './_components/cliente-field/cliente-field.component';
import { SelectorDeFacturasComponent } from './_components/selector-de-facturas/selector-de-facturas.component';
import { PartidasListComponent } from './_components/ncargo/partidas-list/partidas-list.component';
import { NcargoTipoComponent } from './_components/ncargo/ncargo-tipo/ncargo-tipo.component';
import { TipoCarteraComponent } from './shared/tipo-cartera/tipo-cartera.component';
import { NcreditoPageComponent } from './_pages/ncredito-page/ncredito-page.component';
import { NotasDeCreditoService } from './services/notas-de-credito.service';
import { NcreditoListComponent } from './_components/ncredito-list/ncredito-list.component';
import { NcreditoCreateComponent } from './_pages/ncredito-create/ncredito-create.component';
import { NcreditoFormComponent } from './_components/ncredito-form/ncredito-form.component';
import {NcreditoFormPartidasComponent} from './_components/ncredito-form/ncredito-form-partidas.component';


const COMPONENTS: any[] = [
  CxcMainPageComponent, NcargoPageComponent, NotasDeCargoListComponent, NotaDeCargoInfoComponent,
  NcargoCreateComponent, NcargoFormComponent, ClienteFieldComponent, SelectorDeFacturasComponent,
  PartidasListComponent, NcargoTipoComponent, TipoCarteraComponent, NcreditoPageComponent,
  NcreditoListComponent, NcreditoCreateComponent, NcreditoFormComponent, NcreditoFormPartidasComponent
];

@NgModule({
  imports: [
    SharedModule,
    CxcRoutingModule
  ],
  declarations: COMPONENTS,
  providers: [NotasDeCargoService, NotasDeCreditoService]
})
export class CxcModule { }
