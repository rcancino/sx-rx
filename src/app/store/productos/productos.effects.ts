import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { ProductosService } from './productos.service';
import * as productos from './productos.actions';

@Injectable()
export class ProductosEffects {
  constructor(
    private productosService: ProductosService,
    private actions$: Actions
  ) { }

  @Effect() get$ = this.actions$
      .ofType(productos.LOAD)
      .switchMap(payload => this.productosService.get()
        .map(res =>  new productos.LoadSuccessAction(res))
        .catch( error => Observable.of(new productos.LoadFailAction(error)) )
      );
}
