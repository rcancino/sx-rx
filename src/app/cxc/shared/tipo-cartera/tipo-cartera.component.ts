import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'sx-tipo-cartera',
  template: `
    <div layout [formGroup]="parent">
      <md-select placeholder="Cartera" formControlName="usoDeCfdi" flex>
        <md-option *ngFor="let tipo of tipos" [value]="tipo.clave">
          {{tipo.descripcion}}
        </md-option>
      </md-select>
    </div>
  `,
  styles: []
})
export class TipoCarteraComponent implements OnInit {

  @Input() parent: FormGroup;

  tipos: [{clave: string, descripcion: string}] = [
    {clave: 'CRE', descripcion: 'Crédito'},
    {clave: 'CAM', descripcion: 'Camioneta'},
    {clave: 'MOS', descripcion: 'Mostrador'},
    {clave: 'CHE', descripcion: 'Cheque'},
    {clave: 'JUR', descripcion: 'Jurídico'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
