import {
  ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output,
  SimpleChanges
} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpParams} from '@angular/common/http';
import * as _ from 'lodash';

import {Cliente} from '../../../clientes/models/cliente';
import {Subscription} from 'rxjs/Subscription';
import {environment} from '../../../../environments/environment';
import {CuentaPorCobrar} from '../../models/cuentaPorCobrar';


@Component({
  selector: 'sx-selector-de-facturas',
  templateUrl: './selector-de-facturas.component.html',
  styleUrls: ['./selector-de-facturas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectorDeFacturasComponent implements OnInit, OnDestroy, OnChanges {


  @Input() placeholder = 'Seleccion de cuenta por cobrar'

  @Input() cliente: Cliente = null;

  @Output() add = new EventEmitter<CuentaPorCobrar>();

  facturas: CuentaPorCobrar[] = [];

  @Input() selected: CuentaPorCobrar[] = [];

  readonly apiUrl = environment.apiUrl + '/cuentasPorCobrar';

  control = new FormControl(null, [Validators.required, validateFactura]);

  subscription1: Subscription;
  subscription2: Subscription;

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.subscription1 = this.control.valueChanges
      .debounceTime(300)
      .distinctUntilChanged()
      .subscribe( value => {
        this.find(value);
      });
  }

  ngOnDestroy() {
    this.subscription1.unsubscribe();
    if (this.subscription2) {
      this.subscription2.unsubscribe();
    }
  }

  ngOnChanges(changes: SimpleChanges) {

    if ( changes.cliente ) {
      this.control.enable();
    } else {
      this.control.disable();
    }

  }


  find(documento: string) {
    if (this.cliente && documento) {
      this.subscription2 = this.http.get<Object[]>(this.apiUrl,
        {params: new HttpParams()
          .set('documento', documento)
          .set('cliente', this.cliente.id)})
        .map(facturas => {
          const iteretee = _.iteratee('id');
          const res = _.differenceBy(facturas, this.selected, iteretee);
          return res;
        })
        .map(toFacturas)
        .subscribe( res => this.facturas = res);
    }
  }


  displayFn(factura: CuentaPorCobrar) {
    return factura ? `${factura.tipoDocumento} ${factura.documento} (${factura.fecha})  $ ${factura.total}` : factura;
  }


  addFactura() {
    if (this.control.valid) {
      this.add.emit(this.control.value);
      this.control.reset();
    }
  }
}

function validateFactura(c: FormControl) {
  return _.isPlainObject(c.value) ? null : {
    validateFactura: {
      valid: false
    }
  };
}

const toFacturas = (data: Array<any>): CuentaPorCobrar[] => {
  const res = data.map( row => {
    return {
      id: row.id,
      tipoDocumento: row.tipoDocumento,
      documento: row.documento,
      cliente: row.cliente.nombre,
      fecha: row.fecha,
      importe: row.importe,
      impuesto: row.impuesto,
      total: row.total
    };
  });
  return res;
}
