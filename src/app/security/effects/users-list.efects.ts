import {Injectable} from '@angular/core';
import {Actions, Effect, toPayload} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {ROUTER_NAVIGATION} from '@ngrx/router-store';

import * as fromUsersList from '../actions/users-list.actions';


@Injectable()
export class UsersListEfects {

  @Effect({ dispatch: false})
  navigateToUsers$ = this.actions$
    .ofType(ROUTER_NAVIGATION)
    .map(toPayload)
    .do( payload => console.log('Nav to: ', payload));

  constructor(
    private actions$: Actions
  ) {}


}
