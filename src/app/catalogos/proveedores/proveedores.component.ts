import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Store} from '@ngrx/store';

import {Proveedor} from '../../models/proveedor';
import * as fromRoot from '../../store';
import * as actions from '../../store/proveedores/proveedores.actions';

@Component({
  selector: 'sx-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.scss']
})
export class ProveedoresComponent implements OnInit {

  filtrados$: Observable<Proveedor[]>;
  search$ = new BehaviorSubject<string>('');

  constructor(private store: Store<fromRoot.State>) {
    this.filtrados$ = Observable
      .combineLatest(store.select(fromRoot.getProveedores), this.search$, (proveedores, term) => {
        return this.filtrar(proveedores, term);
    });
  }

  ngOnInit() {
    this.store.dispatch(new actions.LoadAction());
  }

  search($event) {
    this.search$.next($event);
  }

  showInfo(proveedor: Proveedor) {
  }

  edit(proveedor: Proveedor) {
  }

  filtrar(proveedores: Proveedor[], term: string ) {
    if (term) {
      return proveedores.filter( item => item.nombre.toLowerCase().startsWith(term.toLowerCase()));
    } else {
      return proveedores;
    }
  }

}
