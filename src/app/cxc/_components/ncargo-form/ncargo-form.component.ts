import {Component, Input, OnDestroy, OnInit, ViewContainerRef} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import * as _ from 'lodash';

import {Cliente} from '../../../clientes/models/cliente';
import {NotaDeCargoConcepto} from '../../models/ncargo-concepto';
import {CuentaPorCobrar} from '../../models/cuentaPorCobrar';
import {Sucursal} from '../../../models/sucursal';
import {forEach} from '@angular/router/src/utils/collection';
import {Subscription} from 'rxjs/Subscription';
import {TdDialogService} from '@covalent/core';

@Component({
  selector: 'sx-ncargo-form',
  templateUrl: './ncargo-form.component.html',
  styles: []
})
export class NcargoFormComponent implements OnInit, OnDestroy {

  @Input() sucursales: Sucursal[];

  clientes: Cliente[] = [];

  selectedCliente: Cliente = null;

  facturas: {[key: string]: CuentaPorCobrar} = {};

  subscription1: Subscription;
  subscription2: Subscription;

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _dialogService: TdDialogService,
    private _viewContainerRef: ViewContainerRef) {
  }

  ngOnInit() {
    this.buildForm();
    this.subscription1 = this.form.get('cliente').valueChanges
      .filter( value => _.isPlainObject(value))
      .subscribe(value => {
        this.selectedCliente = value;
      });

    this.subscription2 = this.form.get('partidas').valueChanges
      .map( value => value.length)
      .subscribe( value => {
        value ? this.cliente.disable() : this.cliente.enable();
        this.actualizar();
        this.actualizarFacturas();
      });
  }

  ngOnDestroy() {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }

  private buildForm() {
    this.form = this.fb.group({
      cliente: ['', [Validators.required, validateCliente] ],
      comentario: ['', Validators.maxLength(20)],
      fecha: [new Date(), Validators.required],
      usoDeCfdi: ['G02', Validators.required],
      tipo: ['', Validators.required],
      cartera: ['', Validators.required],
      partidas: this.fb.array([]),
      cargo: [{value: 0.02, disabled: true}],
      importe: [{value: 0.0, disabled: true}, Validators.required],
      impuesto: [{value: 0.0, disabled: true}, Validators.required],
      total: [{value: 0.0, disabled: true}, Validators.required],
    });
  }


  get cliente() {
    return this.form.get('cliente');
  }

  actualizar() {
    const conceptos: Array<NotaDeCargoConcepto> = this.control.getRawValue();
    const importe = _.sumBy(conceptos, 'importe') ;
    const impuesto = _.sumBy(conceptos, 'impuesto');
    const total = importe + impuesto;
    this.form.patchValue({importe, impuesto, total})
  }

  get control() {
    return this.form.get('partidas') as FormArray;
  }

  get conceptos() {
    return this.control.getRawValue();
  }

  addFactura(factura: CuentaPorCobrar) {
    const cargo = this.form.get('cargo').value;
    if ( this.facturas && this.facturas[factura.id]) {
      this.openAlert(`Factura ${factura.documento} ya ha sido agregada a la nota de cargo`);
    } else {
      this.addConcepto(new NotaDeCargoConcepto(factura, cargo));
    }
  }

  addConcepto(concepto: NotaDeCargoConcepto) {
    this.control.push(new FormControl(concepto));
  }

  onRemove(index: number) {
    this.control.removeAt(index);
    this.actualizarFacturas();
  }

  actualizarFacturas() {
    // const cxcs = this.conceptos.map(it => it.cxc);
    this.facturas = _.keyBy(this.control.getRawValue().map(it => it.cxc), 'id');
    console.log('Facturas seleccionadas: ', this.facturas);
  }

  openAlert(msg: string) {
    this._dialogService.openAlert({
      message: msg,
      viewContainerRef: this._viewContainerRef,
      title: 'Alerta',
      closeButton: 'Cerrar',
    });
  }

}

function validateCliente(c: AbstractControl) {
  return _.isPlainObject(c.value) ? null : {
    validateCliente: {
      valid: false
    }
  };
}
