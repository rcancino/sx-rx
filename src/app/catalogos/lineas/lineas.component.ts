import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import {Store} from '@ngrx/store';

import * as fromRoot from '../../store';
import * as fromLineas from '../../store/lineas/lineas.actions'
import {Linea} from '../../models/linea';

@Component({
  selector: 'sx-lineas',
  templateUrl: './lineas.component.html',
  styleUrls: ['./lineas.component.scss']
})
export class LineasComponent implements OnInit {

  lineas$: Observable<Array<any>>;
  filtradas$: Observable<Array<any>>;
  search$ = new BehaviorSubject<string>('');


  constructor(private store: Store<fromRoot.State>) {
    this.lineas$ = store.select(fromRoot.getLineasEntities);
  }

  ngOnInit() {
    this.store.dispatch(new fromLineas.LoadAction())
    this.filtradas$ = Observable.combineLatest(this.lineas$, this.search$, (lineas, term) => {
      return this.filtrar(lineas, term);
    });
  }

  search($event) {
    this.search$.next($event);
  }

  showInfo(linea: any) {

  }

  edit(linea: any) {

  }

  filtrar(lineas: Linea[], term: string ) {
    if (term) {
      return lineas.filter( linea => linea.linea.toLowerCase().startsWith(term.toLowerCase()));
    } else {
      return lineas;
    }
  }

}


