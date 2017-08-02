import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import * as fromClientes from '../../reducers';
import {LoadAction, SearchAction, SelectAction} from '../../actions/clientes.actions';

import {Cliente} from '../../models/cliente';

@Component({
  selector: 'sx-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  clientes$: Observable<Cliente[]>;
  loading$: Observable<boolean>;
  selected$: Observable<Cliente>;

  constructor(private store: Store<fromClientes.State>) {
    this.clientes$ = store.select(fromClientes.getClientesEntities);
    this.loading$ = store.select(fromClientes.getClientesLoading);
    this.selected$ = store.select(fromClientes.getSelectedCliente);
  }

  ngOnInit() {
    this.store.dispatch(new LoadAction());
  }

  onShow(clienteId: string) {
    this.store.dispatch(new SelectAction((clienteId)));
  }

  onSearch(term: string) {
    this.store.dispatch(new SearchAction(term));
  }

}
