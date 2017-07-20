import { Action } from '@ngrx/store';

import {Marca} from '../../models/marca';

export const LOAD =                 '[Marcas] Load';
export const LOAD_SUCCESS =         '[Marcas] Load Success';
export const LOAD_FAIL =            '[Marcas] Load Fail';

/**
 * Load Marcas Actions
 */
export class LoadAction implements Action {
  readonly type = LOAD;
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: Marca[]) { }
}

export class LoadFailAction implements Action {
  readonly type = LOAD_FAIL;

  constructor(public payload: any) { }
}

export type Actions =
  | LoadAction
  | LoadSuccessAction
  | LoadFailAction;
