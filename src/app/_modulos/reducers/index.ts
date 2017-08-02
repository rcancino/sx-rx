import { createSelector, createFeatureSelector } from '@ngrx/store';

import {Modulo} from '../models/modulo';
import * as fromModulo from './modulos.reducers';
import * as fromRoot from '../../reducers';

export interface ModulosState {
  modulos: fromModulo.State;
}

export interface State extends  fromRoot.State {
  'modulos': ModulosState;
}

export const reducers = {
  modulos: fromModulo.reducer
}

export const getModulosState = createFeatureSelector<ModulosState>('modulos');

export const getModulosEntitiesState = createSelector(
  getModulosState,
  (state: ModulosState) => state.modulos
);

export const getModulos = createSelector(
  getModulosEntitiesState,
  fromModulo.getModulos
);

export const getSelected = createSelector(
  getModulosEntitiesState,
  fromModulo.getCurrentModulo
);

