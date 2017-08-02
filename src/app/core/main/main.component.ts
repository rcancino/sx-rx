import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as Auth from '../../_auth/actions/auth.actions';
import * as fromAuth from '../../_auth/reducers';
import {Store} from '@ngrx/store';


@Component({
  selector: 'sx-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  modulo$: Observable<any>;
  navegacion$: Observable<any[]>;

  // lastError$: Observable<any>;


  constructor(private store: Store<fromAuth.State>) {

    this.modulo$ = Observable.of(
      {
        id: 1, nombre: 'SX Compras',
        descripcion: 'Compras de materia prima',
        image: 'sx-compras.jpq'});

    this.navegacion$ = Observable.of([
        { title: 'Inicio', path: '', icon: 'home'},
        { title: 'Catálogos', path: '/catalogos', icon: 'view_quilt'},
        { title: 'CxP', path: '/cxp', icon: 'my_library_books'},
        { title: 'Compras', path: '/compras', icon: 'shopping_cart'},
        { title: 'Analisis', path: '/analisis', icon: 'compare'},
        { title: 'Dashboards', path: '/dashboards', icon: 'dashboard'},
        { title: 'Productos', path: '/productos', icon: 'layers'},
        { title: 'Proveedores', path: '/proveedores', icon: 'group'},
        { title: 'Clientes', path: '/clientes', icon: 'people_outline'},
        { title: 'CxC', path: '/cxc', icon: 'my_library_add'},
      ], );

   }

  ngOnInit() {
  }

  logout() {
    this.store.dispatch(new Auth.Logout())
  }

}

