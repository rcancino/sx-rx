import { Action } from '@ngrx/store';
import {User} from '../models/user';

export const SELECT = '[User] Select';

export class SelectAction implements Action {
  readonly type = SELECT;
  constructor(public payload: User) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions =
  SelectAction;
