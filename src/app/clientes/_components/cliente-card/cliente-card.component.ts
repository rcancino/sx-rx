import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'sx-cliente-card',
  templateUrl: './cliente-card.component.html',
  styleUrls: ['./cliente-card.component.scss']
})
export class ClienteCardComponent implements OnInit {

  @Input() cliente;

  constructor() { }

  ngOnInit() {
  }

}
