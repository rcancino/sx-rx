import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {NotaDeCargoConcepto} from '../../../models/ncargo-concepto';
import {OutputEmitter} from '@angular/compiler/src/output/abstract_emitter';

@Component({
  selector: 'sx-partidas-list',
  templateUrl: './partidas-list.component.html',
  styleUrls: ['./partidas-list.component.scss']
})
export class PartidasListComponent implements OnInit {

  @Input() parent: FormGroup;

  @Input() partidas: NotaDeCargoConcepto[] = [];

  @Output() select = new EventEmitter<NotaDeCargoConcepto>();

  @Output() delete = new EventEmitter<number>();


  constructor() { }

  ngOnInit() {
  }

}
