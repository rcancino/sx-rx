import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { LINEAS } from '../shared/db-data';
import { Observable } from 'rxjs/Observable';

import * as _ from 'lodash';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../store';
import {environment} from '../../../environments/environment';
import {Linea} from '../../models/linea';
// import {Http} from '@angular/http';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'sx-lineas',
  templateUrl: './lineas.component.html',
  styleUrls: ['./lineas.component.scss']
})
export class LineasComponent implements OnInit {

  lineas: Array<Linea> = undefined;
  lineas$: Observable<Array<any>>;
  filtradas$: Observable<Array<any>>;
  search$ = new Subject<string>();


  constructor(private store: Store<fromRoot.State>, private http: HttpClient) {
    this.lineas$ = store.select(fromRoot.getLineasEntities);
  }

  ngOnInit() {
    this.filtradas$ = Observable.combineLatest(this.lineas$, this.search$, (lineas, term) => {
      return lineas;
    });
    this.http.get<Linea>('api/lineas')
      .subscribe(lineas => {
        console.log(lineas);
      });
  }


  filter(searchTerm: string): Observable<Array<any>> {
    return this.lineas$.map( lineas => {
      const term = searchTerm.toLocaleLowerCase();
      return lineas.filter(linea => linea.nombre.toLocaleLowerCase().startsWith(term))
    });
  }

  search($event) {
    console.log('Filtrando', $event);
    this.search$.next($event);
  }

  showInfo(linea: any) {

  }

  edit(linea: any) {

  }

}
