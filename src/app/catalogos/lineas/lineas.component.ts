import { Component, OnInit } from '@angular/core';

import { LINEAS } from '../shared/db-data';
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Subject } from "rxjs/Subject";
import * as _ from 'lodash';

@Component({
  selector: 'sx-lineas',
  templateUrl: './lineas.component.html',
  styleUrls: ['./lineas.component.scss']
})
export class LineasComponent implements OnInit {
  
  lineas = LINEAS;
  lineas$: Observable<Array<any>>;
  filtradas$: Observable<Array<any>>;
  search$ = new Subject<string>();

  constructor() { 
    this.lineas$ = Observable.of(LINEAS);
    
    // this.search$
    //   .asObservable()
    //   .subscribe(term => console.log('Filter term: ', term))
  }

  ngOnInit() {
    // this.filtradas$ = this.search$
    //   .withLatestFrom(value => this.lineas
    //     .filter( it => it.linea.toLocaleLowerCase().startsWith(value.toLocaleLowerCase())))

    // this.filtradas$ = this.search$
    //   .withLatestFrom(this.lineas$,(term,lineas) => {
    //     return lineas;
    //   });
    
    this.filtradas$ = Observable.combineLatest(this.lineas$, this.search$, (lineas,term) => {
      return lineas;
    });
    this.search$.next('');
    
    
    
  }

  filter(searchTerm: string): Observable<Array<any>>{
    return this.lineas$.map( lineas => {
      let term = searchTerm.toLocaleLowerCase();
      return lineas.filter(linea => linea.nombre.toLocaleLowerCase().startsWith(term))
    });
  }

  search($event){
    console.log('Filtrando', $event);
    this.search$.next($event);
  }

  showInfo(linea: any){

  }

  edit(linea:any){

  }

}
