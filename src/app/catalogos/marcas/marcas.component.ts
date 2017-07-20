import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import { Marca } from '../../models/marca';
import * as fromRoot from '../../store';
import * as actions from '../../store/marcas/marcas.actions';


@Component({
  selector: 'sx-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.scss']
})
export class MarcasComponent implements OnInit {

  filtradas$: Observable<any>;
  search$ = new BehaviorSubject<string>('');

  constructor(private store: Store<fromRoot.State>) {
    // this.filtradas$ = store.select(state => state.marcas.entities);
    this.filtradas$ = Observable
      .combineLatest(store.select(fromRoot.getMarcasEntities), this.search$, (marcas, term) => {
        return this.filtrar(marcas, term);
      });
  }

  ngOnInit() {
    this.store.dispatch(new actions.LoadAction());
  }

  search($event) {
    this.search$.next($event);
  }

  showInfo(marca: Marca) {
  }

  edit(marca: Marca) {
  }

  filtrar(marcas: Marca[], term: string ) {
    if (term) {
      return marcas.filter( item => item.marca.toLowerCase().startsWith(term.toLowerCase()));
    } else {
      return marcas;
    }
  }

}
