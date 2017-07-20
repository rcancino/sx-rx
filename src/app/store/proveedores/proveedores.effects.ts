import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { ProveedoresService } from './proveedores.service';
import * as proveedores from './proveedores.actions';

@Injectable()
export class ProveedoresEffects {
  constructor(
    private proveedoresService: ProveedoresService,
    private actions$: Actions
  ) { }

  @Effect() get$ = this.actions$
    .ofType(proveedores.LOAD)
    .switchMap(payload => this.proveedoresService.get()
      .map(res => new proveedores.LoadSuccessAction(res))
      .catch(error => Observable.of(new proveedores.LoadFailAction(error)))
    );
}
