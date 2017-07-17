import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { LineasService } from './lineas.service';
import * as lineas from './lineas.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LineasEffects {
  constructor(
    private lineasService: LineasService,
    private actions$: Actions
  ) { }
  /*
  @Effect() get$ = this.actions$
      .ofType(lineas.LOAD)
      .switchMap(payload => this.lineasService.get()
        // If successful, dispatch success action with result
        .map(data => ({ type: lineas.LOAD_SUCCESS, payload: data }))
        // If request fails, dispatch failed action
        .catch(() => Observable.of({ type: lineas.LOAD_FAIL}))
      );
      */
}
