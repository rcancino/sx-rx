import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { ClasesService } from './clases.service';

import * as clases from './clases.actions';


@Injectable()
export class ClasesEffects {
  constructor(
    private clasesService: ClasesService,
    private actions$: Actions
  ) { }

  @Effect() get$ = this.actions$
      .ofType(clases.LOAD)
      .switchMap(payload => this.clasesService.get()
        .map(entites => (new clases.LoadSuccessAction(entites)))
        .catch((error) => Observable.of(new clases.LoadFailAction(error)))
      );
}
