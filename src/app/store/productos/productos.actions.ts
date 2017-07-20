import { Action } from '@ngrx/store';
import {Producto} from '../../models/producto';

export const LOAD =                 '[Productos] Load';
export const LOAD_SUCCESS =         '[Productos] Load Success';
export const LOAD_FAIL =            '[Productos] Load Fail';

/**
 * Load Productos Actions
 */
export class LoadAction implements Action {
  readonly type = LOAD;
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: Producto[]) { }
}

export class LoadFailAction implements Action {
  readonly type = LOAD_FAIL;

  constructor(public payload: any) { }
}

export type Actions =
  | LoadAction
  | LoadSuccessAction
  | LoadFailAction;
