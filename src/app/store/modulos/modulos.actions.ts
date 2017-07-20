import { Action } from '@ngrx/store';

export const SET_CURRENT =          '[Modulo] Set current'

/**
 * Set current module
 */
export class SetCurrentAction implements Action {
  readonly type = SET_CURRENT;

  constructor(public payload: any) { }
}

export type Actions =
  | SetCurrentAction
