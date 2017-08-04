import { Component, OnInit } from '@angular/core';

import {NotasDeCargoService} from '../../services/notas-de-cargo.service';
import {Observable} from 'rxjs/Observable';
import {NotaDeCargo} from '../../models/nota-de-cargo';

@Component({
  selector: 'sx-ncargo-page',
  templateUrl: './ncargo-page.component.html',
  styleUrls: ['./ncargo-page.component.scss']
})
export class NcargoPageComponent implements OnInit {

  notas$: Observable<NotaDeCargo[]>;
  selected: NotaDeCargo = null;

  constructor(service: NotasDeCargoService) {
    this.notas$ = service.list({tipo: 'CRE'});
  }

  ngOnInit() {
  }

  onSearch(term: string) {
    console.log('Buscando notas de cargo....')
  }

  onSelect(nota: NotaDeCargo) {
    this.selected = nota;
  }

}
