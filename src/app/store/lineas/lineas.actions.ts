import { Action } from '@ngrx/store';

export const LOAD =                 '[Lineas] Load';
export const LOAD_SUCCESS =         '[Lineas] Load Success';
export const LOAD_FAIL =            '[Lineas] Load Fail';

/**
 * Load Lineas Actions
 */
export class LoadAction implements Action {
  readonly type = LOAD;
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: any) { }
}

export class LoadFailAction implements Action {
  readonly type = LOAD_FAIL;

  constructor(public payload: any) { }
}

export type Actions =
  | LoadAction
  | LoadSuccessAction
  | LoadFailAction;