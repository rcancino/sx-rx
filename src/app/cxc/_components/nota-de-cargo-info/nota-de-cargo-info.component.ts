import {Component, Input, OnInit} from '@angular/core';
import {NotaDeCargo} from '../../models/nota-de-cargo';

@Component({
  selector: 'sx-nota-de-cargo-info',
  templateUrl: './nota-de-cargo-info.component.html',
  styles: []
})
export class NotaDeCargoInfoComponent implements OnInit {

  @Input() nota: NotaDeCargo;

  constructor() { }

  ngOnInit() {
  }

}
