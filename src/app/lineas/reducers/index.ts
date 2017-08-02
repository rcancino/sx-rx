import {createSelector, createFeatureSelector, ActionReducerMap} from '@ngrx/store';
import * as _ from 'lodash';

import * as lineas from '../actions/lineas.actions';

import { Linea } from '../models/linea';
import * as fromRoot from '../../reducers'
import * as fromLineas from './lineas.reducer';


export interface LineasState {
  lineas: fromLineas.State
}

/**
 * State used in containers (smart components)
 */
export interface State extends fromRoot.State {
  'lineas': LineasState;
}

export const reducers: ActionReducerMap<LineasState> = {
  lineas: fromLineas.reducer
}


/**
 * A selector function is a map function factory. We pass it parameters and it
 * returns a function that maps from the larger state tree into a smaller
 * piece of state. This selector simply selects the `books` state.
 *
 * Selectors are used with the `select` operator.
 *
 * ```ts
 * class MyComponent {
 * 	constructor(state$: Observable<State>) {
 * 	  this.booksState$ = state$.select(getBooksState);
 * 	}
 * }
 * ```
 */

/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
 */
export const getLineasState = createFeatureSelector<LineasState>('lineas');

/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them useable, we
 * need to make new selectors that wrap them.
 *
 * The createSelector function creates very efficient selectors that are memoized and
 * only recompute when arguments change. The created selectors can also be composed
 * together to select different pieces of state.
 */
export const getLineasEntitiesState = createSelector(
  getLineasState,
  (state: LineasState) => state.lineas
);

export const getLineasEntities = createSelector(
  getLineasEntitiesState,
  fromLineas.getEntities
)


