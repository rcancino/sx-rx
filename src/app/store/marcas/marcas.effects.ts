import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { MarcasService } from './marcas.service';
import * as marcas from './marcas.actions';

@Injectable()
export class MarcasEffects {
  constructor(
    private marcasService: MarcasService,
    private actions$: Actions
  ) { }

  @Effect() get$ = this.actions$
      .ofType(marcas.LOAD)
      .switchMap(() => this.marcasService.get()
        .map(entities => new marcas.LoadSuccessAction(entities))
        .catch(error => Observable.of(new marcas.LoadFailAction(error)))
      );
}
