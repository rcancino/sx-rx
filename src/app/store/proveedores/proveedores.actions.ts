import { Action } from '@ngrx/store';

import {Proveedor} from '../../models/proveedor';

export const LOAD =                 '[Proveedores] Load';
export const LOAD_SUCCESS =         '[Proveedores] Load Success';
export const LOAD_FAIL =            '[Proveedores] Load Fail';

/**
 * Load Proveedores Actions
 */
export class LoadAction implements Action {
  readonly type = LOAD;
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: Proveedor[]) { }
}

export class LoadFailAction implements Action {
  readonly type = LOAD_FAIL;

  constructor(public payload: any) { }
}

export type Actions =
  | LoadAction
  | LoadSuccessAction
  | LoadFailAction;
