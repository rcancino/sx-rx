import { NgModule } from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import { reducer } from './index'
import {LineasService} from './lineas/lineas.service';
import {LineasEffects} from './lineas/lineas.effects';
import {MarcasService} from './marcas/marcas.service';
import {MarcasEffects} from './marcas/marcas.effects';
import {ClasesEffects} from './clases/clases.effects';
import {ClasesService} from './clases/clases.service';
import {ProveedoresEffects} from './proveedores/proveedores.effects';
import {ProveedoresService} from './proveedores/proveedores.service';
import {ProductosEffects} from './productos/productos.effects';
import {ProductosService} from './productos/productos.service';


@NgModule({
  imports: [
    /**
     * StoreModule.provideStore is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    StoreModule.provideStore(reducer),
    /**
     * EffectsModule.run() sets up the effects class to be initialized
     * immediately when the application starts.
     *
     * See: https://github.com/ngrx/effects/blob/master/docs/api.md#run
     */
    EffectsModule.run(LineasEffects),
    EffectsModule.run(MarcasEffects),
    EffectsModule.run(ClasesEffects),
    EffectsModule.run(ProveedoresEffects),
    EffectsModule.run(ProductosEffects),
  ],
  exports: [],
  declarations: [],
  providers: [LineasService, MarcasService, ClasesService, ProveedoresService, ProductosService],
})
export class SxStoreModule { }
