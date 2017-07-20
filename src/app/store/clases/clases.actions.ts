import { Action } from '@ngrx/store';

import {Clase} from '../../models/clase';

export const LOAD =                 '[Clases] Load';
export const LOAD_SUCCESS =         '[Clases] Load Success';
export const LOAD_FAIL =            '[Clases] Load Fail';

/**
 * Load Clases Actions
 */
export class LoadAction implements Action {
  readonly type = LOAD;
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: Clase[]) { }
}

export class LoadFailAction implements Action {
  readonly type = LOAD_FAIL;

  constructor(public payload: any) { }
}

export type Actions =
  | LoadAction
  | LoadSuccessAction
  | LoadFailAction;
