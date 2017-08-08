import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {NotaDeCredito} from '../../models/notaDeCredito';

@Component({
  selector: 'sx-ncredito-list',
  templateUrl: './ncredito-list.component.html',
  styles: []
})
export class NcreditoListComponent implements OnInit {

  @Input() notas: NotaDeCredito[] = [];
  @Output() show = new EventEmitter<NotaDeCredito>();

  constructor() { }

  ngOnInit() {
  }

}
