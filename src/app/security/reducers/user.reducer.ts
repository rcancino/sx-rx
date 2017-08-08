import {createSelector} from '@ngrx/store';

import { User } from '../models/user';
import * as user from '../actions/user.actions';

export interface State {
  selectedUser: User | null;
}

export const initialState: State = {
  selectedUser: null
};

export function reducer(state = initialState, action: user.Actions) {
  switch (action.type) {
    case user.SELECT: {
      return {
        selectedUser: action.payload
      };
    }
    default: {
      return state;
    }
  }
}

export const getSelected = (state: State) => state.selectedUser;
