import { Component, OnInit } from '@angular/core';
import {NotaDeCredito} from '../../models/notaDeCredito';
import {Observable} from 'rxjs/Observable';
import {NotasDeCreditoService} from '../../services/notas-de-credito.service';

@Component({
  selector: 'sx-ncredito-page',
  templateUrl: './ncredito-page.component.html',
  styleUrls: ['./ncredito-page.component.scss']
})
export class NcreditoPageComponent implements OnInit {

  notas$: Observable<NotaDeCredito[]>;
  selected: NotaDeCredito = null;


  constructor(private service: NotasDeCreditoService) {
    this.notas$ = service.list({tipo: 'CRE'});
  }

  ngOnInit() {
  }

  onSearch(term: string) {
    console.log('Buscando notas de cargo....')
  }

  onSelect(nota: NotaDeCredito) {
    this.selected = nota;
  }

}
