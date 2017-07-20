import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Store} from '@ngrx/store';

import {Clase} from '../../models/clase';
import * as fromRoot from '../../store';
import * as fromClases from '../../store/clases/clases.actions';



@Component({
  selector: 'sx-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.scss']
})
export class ClasesComponent implements OnInit {

  filtradas$: Observable<Clase[]>;
  search$: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(private store: Store<fromRoot.State>) {

    this.filtradas$ = Observable
      .combineLatest(store.select(fromRoot.getClasesEntities), this.search$, (clases, term) => {
        return this.filtrar(clases, term);
      });
  }

  ngOnInit() {
    this.store.dispatch(new fromClases.LoadAction());
  }

  search($event) {
    this.search$.next($event);
  }

  showInfo(clase: Clase) {
  }

  edit(clase: Clase) {
  }

  filtrar(clases: Clase[], term: string ) {
    if (term) {
      return clases.filter( item => item.clase.toLowerCase().startsWith(term.toLowerCase()));
    } else {
      return clases;
    }
  }
}
