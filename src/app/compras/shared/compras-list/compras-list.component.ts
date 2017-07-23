import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Compra} from '../../../models/compra';

@Component({
  selector: 'sx-compras-list',
  templateUrl: './compras-list.component.html',
  styleUrls: ['./compras-list.component.scss']
})
export class ComprasListComponent implements OnInit {

  @Input() compras: Array<Compra> = [];

  @Output() edit = new EventEmitter<number>();

  @Output() info = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  showInfo(compraId: number) {
    this.info.emit(compraId);
  }

  editEntity(compraId: number) {
    this.edit.emit(compraId);
  }

}
