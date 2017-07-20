import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { LineasService } from './lineas.service';
import * as lineas from './lineas.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import * as _ from 'lodash';

@Injectable()
export class LineasEffects {
  constructor(
    private lineasService: LineasService,
    private actions$: Actions
  ) { }

  @Effect() lineas$ = this.actions$
    .ofType(lineas.LOAD)
    .switchMap(payload => this.lineasService.get()
      .map(data => new lineas.LoadSuccessAction(data))
      .catch(error => Observable.of(new lineas.LoadFailAction(error)))
    );
}
