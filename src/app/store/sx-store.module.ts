import { NgModule } from '@angular/core';
import {LineasService} from './lineas/lineas.service';
import {StoreModule} from '@ngrx/store';

import { reducer } from './index'


@NgModule({
  imports: [
    /**
     * StoreModule.provideStore is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    StoreModule.provideStore(reducer)
  ],
  exports: [],
  declarations: [],
  providers: [LineasService],
})
export class SxStoreModule { }
