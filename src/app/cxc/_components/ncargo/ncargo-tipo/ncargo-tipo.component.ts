import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'sx-ncargo-tipo',
  templateUrl: './ncargo-tipo.component.html',
  styleUrls: ['./ncargo-tipo.component.scss']
})
export class NcargoTipoComponent implements OnInit {

  tipos: [{clave: string, descripcion: string}] = [
    {clave: 'MORATORIOS', descripcion: 'Interese moratorios por falta de pago'},
    {clave: 'CHEQUE_DEVUELTO', descripcion: 'Cargo 20% por cheque devuelto'},
  ];

  @Input() parent: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
