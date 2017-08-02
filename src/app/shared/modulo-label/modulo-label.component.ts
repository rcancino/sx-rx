import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import * as fromRoot from '../../store';

@Component({
  selector: 'sx-modulo-label',
  templateUrl: './modulo-label.component.html',
  styleUrls: ['./modulo-label.component.scss']
})
export class ModuloLabelComponent implements OnInit {

  moduloName$: Observable<string>;

  constructor(private  store: Store<fromRoot.State>) {
    /*this.moduloName$ = this.store
      .select(fromRoot.getCurrentModulo)
      .map(modulo => modulo.nombre);*/
    this.moduloName$ = Observable.of('Sx compras');
  }

  ngOnInit() {
  }

}
