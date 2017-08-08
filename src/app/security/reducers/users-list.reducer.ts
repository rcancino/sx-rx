
import { User } from '../models/user';
import * as usersList from '../actions/users-list.actions';
import {createSelector} from '@ngrx/store';


export interface State {
  ids: string[];
  entities: { [id: string]: User };
  selectedUserId: string | null;
  loading: boolean;
}

export const initialState: State = {
  ids: [],
  entities: {},
  selectedUserId: null,
  loading: false,
};

export function reducer(state = initialState, action: usersList.Actions) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}

export const getLoading = (state: State) => state.loading;

export const getUsers = (state: State) => state.entities;

export const getSelectedId = (state: State) => state.selectedUserId;

export const getSelected = createSelector(
  getUsers,
  getSelectedId,
  (entities, selectedId) => {
    return entities[selectedId];
  }
);

