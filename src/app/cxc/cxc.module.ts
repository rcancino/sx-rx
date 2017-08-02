import { NgModule } from '@angular/core';

import {SharedModule} from '../shared/shared.module';
import { CxcRoutingModule } from './cxc-routing.module';
import { CxcMainPageComponent } from './_pages/cxc-main-page/cxc-main-page.component';
import { NcargoPageComponent } from './_pages/ncargo-page/ncargo-page.component';
import {NotasDeCargoService} from './services/notas-de-cargo.service';
import { NotasDeCargoListComponent } from './_components/notas-de-cargo-list/notas-de-cargo-list.component';



@NgModule({
  imports: [
    SharedModule,
    CxcRoutingModule
  ],
  declarations: [CxcMainPageComponent, NcargoPageComponent, NotasDeCargoListComponent],
  providers: [NotasDeCargoService]
})
export class CxcModule { }
