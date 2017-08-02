import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cliente} from '../../models/cliente';

@Component({
  selector: 'sx-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.scss']
})
export class ClientesListComponent implements OnInit {

  @Input() clientes: Array<Cliente> = [];

  @Output() show = new EventEmitter<Cliente>();

  @Output() edit = new EventEmitter<Cliente>();

  constructor() { }

  ngOnInit() {
  }





}
