import { Component, OnInit } from '@angular/core';
import {NotaDeCredito} from '../../models/notaDeCredito';

@Component({
  selector: 'sx-ncredito-create',
  templateUrl: './ncredito-create.component.html',
  styleUrls: ['./ncredito-create.component.scss']
})
export class NcreditoCreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addNota(nota: NotaDeCredito) {
    console.log('Adding a new nota, Dispatch an action to the store');
  }

}
