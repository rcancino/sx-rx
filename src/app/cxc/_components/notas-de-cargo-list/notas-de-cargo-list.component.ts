import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NotaDeCargo} from '../../models/nota-de-cargo';

@Component({
  selector: 'sx-notas-de-cargo-list',
  templateUrl: './notas-de-cargo-list.component.html',
  styleUrls: ['./notas-de-cargo-list.component.scss']
})
export class NotasDeCargoListComponent implements OnInit {

  @Input() notas: NotaDeCargo[] = [];
  @Output() show = new EventEmitter<NotaDeCargo>();

  constructor() { }

  ngOnInit() {
  }

}
