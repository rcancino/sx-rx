import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import * as fromClientes from './clientes.reducer';
import * as fromSearch from './search.reducer';

export interface ClientesState {
  clientes: fromClientes.State
  search: fromSearch.State
}

export interface State extends fromRoot.State {
  'clientes': ClientesState;
}

export const reducers = {
  clientes: fromClientes.reducer,
  search: fromSearch.reducer
}

/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
 */
export const getClientesState = createFeatureSelector<ClientesState>('clientes');

export const getClientesEntitiesState = createSelector(
  getClientesState,
  (state: ClientesState) => state.clientes
);

export const getClientesEntities = createSelector(
  getClientesEntitiesState,
  fromClientes.getEntities
);

export const getClientesLoading = createSelector(
  getClientesEntitiesState,
  fromClientes.getLoading
);

export const getSearchState = createSelector(
  getClientesState,
  (state: ClientesState) => state.search
);

export const getSearchFilter = createSelector(
  getSearchState,
  fromSearch.getFilter
);

export const getSearchLoading = createSelector(
  getSearchState,
  fromSearch.getLoading
);

export const getSelectedCliente = createSelector(
  getClientesEntitiesState,
  fromClientes.getSelected
)

