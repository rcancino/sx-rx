import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { ComprasService } from './compras.service';

import * as compras from './compras.actions';

@Injectable()
export class ComprasEffects {
  constructor(
    private comprasService: ComprasService,
    private actions$: Actions
  ) { }

  @Effect() get$ = this.actions$
      .ofType(compras.LOAD)
      .switchMap(payload => this.comprasService.list()
        .map(res => new compras.LoadSuccessAction(res))
        .catch(error => Observable.of(new compras.LoadFailAction(error)))
      );
}
