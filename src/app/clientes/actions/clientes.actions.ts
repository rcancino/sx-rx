import { Action } from '@ngrx/store';
import {Cliente} from '../models/cliente';

export const LOAD =                 '[Cliente] Load';
export const LOAD_SUCCESS =         '[Cliente] Load Success';
export const LOAD_FAIL =            '[Cliente] Load Fail';

export const SELECT = '[Cliente] select';
export const SELECT_SUCCESS =         '[Cliente] Select Success';
export const SELECT_FAIL =            '[Cliente] Select Fail';

export const SEARCH = '[Cliente] Search';
export const SEARCH_COMPLETE = '[Cliente] Search Complete';


export class SearchAction implements Action {
  readonly type = SEARCH;

  constructor(public payload?: {}) {}
}

export class SearchCompleteAction implements Action {
  readonly type = SEARCH_COMPLETE;

  constructor(public payload: Cliente[]) {}
}

export class LoadAction implements Action {
  readonly type = LOAD;
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: Cliente[]) { }
}

export class LoadFailAction implements Action {
  readonly type = LOAD_FAIL;

  constructor(public payload?: any) { }
}

export class SelectAction implements Action {
  readonly type = SELECT;

  constructor(public payload: string) { }
}

export class SelectSuccessAction implements Action {
  readonly type = SELECT_SUCCESS;

  constructor(public payload: Cliente) {}
}

export class SelectFailAction implements Action {
  readonly type = SELECT_FAIL;

  constructor(public payload: any) {}
}

export type Actions =
  | SearchAction
  | SearchCompleteAction
  | LoadAction
  | LoadSuccessAction
  | LoadFailAction
  | SelectAction
  | SelectSuccessAction
  | SelectFailAction
