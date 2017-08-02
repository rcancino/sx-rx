import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import { AuthService } from '../services/auth.service';
import * as Auth from '../actions/auth.actions';
import {Observable} from 'rxjs/Observable';
import {RouterNavigationAction} from '@ngrx/router-store';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class AuthEffects {

  @Effect()
  login$ = this.actions$
    .ofType(Auth.LOGIN)
    .map((action: Auth.Login) => action.payload)
    .exhaustMap(auth =>
      this.authService
        .login(auth)
        .map(authentication => new Auth.LoginSuccess(authentication))
        .catch(error => of(new Auth.LoginFailure(error)))
    );

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$
    .ofType(Auth.LOGIN_SUCCESS)
    .do((action: Auth.LoginSuccess) => {
      console.log('Save auth in local storage: ', action.payload)
      localStorage.setItem('auth', JSON.stringify(action.payload))
    })
    .do(() => this.router.navigate(['/']));

  @Effect({ dispatch: false })
  loginRedirect$ = this.actions$
    .ofType(Auth.LOGIN_REDIRECT, Auth.LOGOUT)
    .do(authed => {
      localStorage.removeItem('auth');
      this.router.navigate(['/login']);
    });

  @Effect() errorStatus401$ = this.actions$
    .map(toPayload)
    .filter(payload => payload && payload.status === 401)
    // .filter(payload => payload instanceof HttpErrorResponse)
    .switchMap(payload => {
      return Observable.of(new Auth.LoginRedirect());
    });


  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
