import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Store} from '@ngrx/store';

import {Producto} from '../../models/producto';
import * as fromRoot from '../../store';
import * as fromProductos from '../../store/productos/productos.actions';

@Component({
  selector: 'sx-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  productos$: Observable<Producto[]>;
  search$ = new BehaviorSubject('');

  constructor(private store: Store<fromRoot.State>) {
    this.productos$ = Observable
      .combineLatest(store.select(fromRoot.getProductos), this.search$, (productos, term) => {
        return this.filtrar(productos, term);
      });
  }

  ngOnInit() {
    this.store.dispatch(new fromProductos.LoadAction());
  }

  search($event) {
    this.search$.next($event);
  }

  showInfo(producto: Producto) {
  }

  edit(producto: Producto) {
  }

  filtrar(productos: Producto[], term: string ) {
    if (term) {
      return productos.filter( item => item.descripcion.toLowerCase().startsWith(term.toLowerCase()));
    } else {
      return productos;
    }
  }

}
