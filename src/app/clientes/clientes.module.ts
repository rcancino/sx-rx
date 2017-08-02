import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {SharedModule} from '../shared/shared.module';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesService } from './services/clientes.service';
import { ClientesEffects } from './effects/clientes.effects';
import { reducers } from './reducers';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { ClientesSerchCardComponent } from './_components/clientes-serch-card/clientes-serch-card.component';
import { ClientesListComponent } from './_components/clientes-list/clientes-list.component';
import { ClienteCardComponent } from './_components/cliente-card/cliente-card.component';



@NgModule({
  imports: [
    SharedModule,
    ClientesRoutingModule,
    /**
     * StoreModule.forFeature is used for composing state
     * from feature modules. These modules can be loaded
     * eagerly or lazily and will be dynamically added to
     * the existing state.
     */
    StoreModule.forFeature('clientes', reducers),
    EffectsModule.forFeature([ClientesEffects]),
  ],
  declarations: [ListPageComponent, ClientesSerchCardComponent, ClientesListComponent, ClienteCardComponent],
  providers: [ClientesService]
})
export class ClientesModule { }
