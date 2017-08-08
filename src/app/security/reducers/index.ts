import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromUser from './user.reducer';
import * as fromUsersList from './users-list.reducer';
import * as fromRoot from '../../reducers';

export interface UsersState {
  usersList: fromUsersList.State;
  user: fromUser.State;
}

export interface State extends fromRoot.State {
  'users': UsersState;
}

export const reducers = {
  usersList: fromUsersList.reducer,
  user: fromUser.reducer
};

export const getUsersState = createFeatureSelector<UsersState>('users');

export const getUsersListState = createSelector(
  getUsersState,
  (state: UsersState) => state.usersList
);

export const getUsersLoading = createSelector(
  getUsersListState,
  fromUsersList.getLoading
);

