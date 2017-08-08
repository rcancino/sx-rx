import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {NotaDeCreditoDet} from '../../models/notaDeCreditoDet';

@Component({
  selector: 'sx-ncredito-form-partidas',
  templateUrl: './ncredito-form-partidas.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: []
})
export class NcreditoFormPartidasComponent implements OnInit {

  @Input() parent: FormGroup;

  @Input() partidas: NotaDeCreditoDet[] = [];

  @Output() select = new EventEmitter<NotaDeCreditoDet>();

  @Output() delete = new EventEmitter<number>();

  @Output() edit = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  get invalid() {
    return (
      this.parent.hasError('sinPartidas')
    );
  }

}
