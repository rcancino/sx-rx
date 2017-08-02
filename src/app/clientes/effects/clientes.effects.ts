import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';

import { ClientesService } from '../services/clientes.service';
import * as cliente from '../actions/clientes.actions';
import {Router} from '@angular/router';

@Injectable()
export class ClientesEffects {

  @Effect() get$ = this.actions$
      .ofType(cliente.LOAD)
      .switchMap(payload => this.clienteService.list('')
        .map(clientes => new cliente.LoadSuccessAction(clientes))
        .catch((error) => Observable.of({ type: cliente.LOAD_FAIL, payload: error}))
      );

  @Effect() select$ = this.actions$
    .ofType(cliente.SELECT)
    .map(toPayload)
    .switchMap(payload => this.clienteService.get(payload)
      .map(cte => new cliente.SelectSuccessAction(cte))
      .catch((error) => Observable.of({ type: cliente.SELECT_FAIL, payload: error}))
    );

  @Effect() search$ = this.actions$
    .ofType(cliente.SEARCH)
    .map(toPayload)
    .switchMap(payload => this.clienteService.list(payload))
    .map(clientes => new cliente.LoadSuccessAction(clientes))
    .catch((error) => Observable.of({ type: cliente.LOAD_FAIL, payload: error}))

  constructor(
    private clienteService: ClientesService,
    private actions$: Actions,
    private router: Router
  ) { }

}
