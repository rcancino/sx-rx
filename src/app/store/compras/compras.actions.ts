import { Action } from '@ngrx/store';

import {Compra} from '../../models/compra';

export const LOAD =                 '[Compras] Load';
export const LOAD_SUCCESS =         '[Compras] Load Success';
export const LOAD_FAIL =            '[Compras] Load Fail';

/**
 * Load Compras Actions
 */
export class LoadAction implements Action {
  readonly type = LOAD;
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: Compra[]) { }
}

export class LoadFailAction implements Action {
  readonly type = LOAD_FAIL;

  constructor(public payload: any) { }
}

export type Actions =
  | LoadAction
  | LoadSuccessAction
  | LoadFailAction;
