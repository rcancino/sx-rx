import { Action } from '@ngrx/store';

import {User} from '../models/user';

export const ADD_USER = '[Users List] Add User';
export const ADD_USER_SUCCESS = '[Users List] Add User Success';
export const ADD_USER_FAIL = '[Users List] Add User Fail';
export const REMOVE_USER = '[Users List] Remove User';
export const REMOVE_USER_SUCCESS = '[Users List] Remove User Success';
export const REMOVE_USER_FAIL = '[Users List] Remove User Fail';
export const LOAD = '[Users List] Load users';
export const LOAD_SUCCESS = '[Users List] Load users Success';
export const LOAD_FAIL = '[Users List] Load users Fail';

export const SELECT = '[User] Select';


/**
 * Add User to Users list Actions
 */
export class AddUserAction implements Action {
  readonly type = ADD_USER;

  constructor(public payload: User) {}
}

export class AddUserSuccessAction implements Action {
  readonly type = ADD_USER_SUCCESS;

  constructor(public payload: User) {}
}

export class AddUserFailAction implements Action {
  readonly type = ADD_USER_FAIL;

  constructor(public payload: User) {}
}

/**
 * Remove User from Users list Actions
 */
export class RemoveUserAction implements Action {
  readonly type = REMOVE_USER;

  constructor(public payload: User) {}
}

export class RemoveUserSuccessAction implements Action {
  readonly type = REMOVE_USER_SUCCESS;

  constructor(public payload: User) {}
}

export class RemoveUserFailAction implements Action {
  readonly type = REMOVE_USER_FAIL;

  constructor(public payload: User) {}
}

/**
 * Load Users list Actions
 */
export class LoadAction implements Action {
  readonly type = LOAD;
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: User[]) {}
}

export class LoadFailAction implements Action {
  readonly type = LOAD_FAIL;

  constructor(public payload: any) {}
}

export type Actions =
  | AddUserAction
  | AddUserSuccessAction
  | AddUserFailAction
  | RemoveUserAction
  | RemoveUserSuccessAction
  | RemoveUserFailAction
  | LoadAction
  | LoadSuccessAction
  | LoadFailAction;
