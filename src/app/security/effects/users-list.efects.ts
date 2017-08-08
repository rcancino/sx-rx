import {Injectable} from '@angular/core';
import {Actions, Effect, toPayload} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {ROUTER_NAVIGATION, RouterNavigationAction} from '@ngrx/router-store';

import * as fromUsersList from '../actions/users-list.actions';


@Injectable()
export class UsersListEfects {

  @Effect({ dispatch: false})
  navigateToUsers$ = this.actions$
    .ofType(ROUTER_NAVIGATION)
    .map((r: RouterNavigationAction) => r.payload.routerState)
    .filter(routerState => routerState.url === '/security/usuarios')
    .do(routerSate => {
      console.log('Router state: ', routerSate.url);
      console.log('Should dispatch LOAD_USERS action');
    });

  constructor(
    private actions$: Actions
  ) {}

  /*
  private handleNavigation(segment: string, callback: (a: ActivatedRouteSnapshot, state: State) => Observable<any>) {
    const nav = this.actions.ofType(ROUTER_NAVIGATION).
    map(firstSegment).
    filter(s => s.routeConfig.path === segment);

    return nav.withLatestFrom(this.store)
      .switchMap(a => callback(a[0], a[1]))
      .catch(e => {
      console.log('Network error', e);
      return of();
    });
  }
  */
}

function firstSegment(r: RouterNavigationAction) {
  return r.payload.routerState.root.firstChild;
}
