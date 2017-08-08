import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnChanges, OnDestroy, OnInit, Output,
  SimpleChanges, ViewContainerRef
} from '@angular/core';
import {NotaDeCredito} from '../../models/notaDeCredito';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import {TdDialogService} from '@covalent/core';
import * as _ from 'lodash';

import {NotaDeCreditoDet} from '../../models/notaDeCreditoDet';
import {CuentaPorCobrar} from '../../models/cuentaPorCobrar';
import {Cliente} from '../../../clientes/models/cliente';

@Component({
  selector: 'sx-ncredito-form',
  templateUrl: './ncredito-form.component.html',
  styleUrls: ['./ncredito-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NcreditoFormComponent implements OnInit, OnChanges, OnDestroy {

  @Output() add = new EventEmitter<NotaDeCredito>();

  form: FormGroup;

  selectedCliente: Cliente = null;

  subscription1: Subscription;
  subscription2: Subscription;

  facturas: {[key: string]: CuentaPorCobrar} = {};

  constructor(
    private fb: FormBuilder,
    private _dialogService: TdDialogService,
    private _viewContainerRef: ViewContainerRef,
    private ref: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.buildForm();
    this.ngOnChanges();
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
      });
  }

  ngOnDestroy() {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }

  private buildForm() {
    this.form = this.fb.group({
      cliente: ['', Validators.required],
      tipo: [null, Validators.required],
      subTipo: ['ESPECIAL', Validators.required],
      fecha: [null, Validators.required],
      descuento: [0.0, Validators.min(0.0)],
      moneda: ['MXN', Validators.required],
      tipoDeCambio: [1.0, Validators.required],
      usoDeCfdi: ['G02', Validators.required],
      comentario: ['', Validators.maxLength(100)],
      importe: [{value: 0.0, disabled: true}, Validators.required],
      impuesto: [{value: 0.0, disabled: true}, Validators.required],
      total: [{value: 0.0, disabled: true}, Validators.required],
      partidas: this.fb.array([])
    }, {
      validator: PartidasValidator
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.add.emit(this.form.value);
  }

  revert() {
    this.form.reset();
  }

  ngOnChanges() {
    this.form.patchValue({
      tipo: 'DESCUENTO',
      fecha: new Date(),
      moneda: 'MXN'
    })
  }

  get control() {
    return this.form.get('partidas') as FormArray;
  }

  get cliente() {
    return this.form.get('cliente');
  }

  addFactura(factura: CuentaPorCobrar) {
    const descuento = this.form.get('descuento').value;
    if ( this.facturas && this.facturas[factura.id]) {
      this.openAlert(`Factura ${factura.documento} ya ha sido agregada a la nota de crédito`);
    } else {
      this.addConcepto(new NotaDeCreditoDet(factura, descuento));
    }
  }

  addConcepto(concepto: NotaDeCreditoDet) {
    this.control.push(new FormControl(concepto));
  }

  onRemove(index: number) {

    const ctrl = this.control.at(index).value;
    console.log('Eliminando: ', ctrl);
    // const msg = ctrl.cxc ? ctrl.cxc.documento : ctrl.concepto;
    const msg = ctrl.toString()
    // const msg = `Eliminar partida ${index}`;
    this._dialogService.openConfirm({

      message: `Concepto ${msg} ?`,
      viewContainerRef: this._viewContainerRef,
      title: 'Eliminar partida',
      cancelButton: 'Cancelar',
      acceptButton: 'Aceptar',
    }).afterClosed().subscribe((accept: boolean) => {
      if (accept) {
        this.control.removeAt(index);
        this.ref.detectChanges();
      }
    });
    // this.control.removeAt(index);
  }

  onEdit(index: number) {
    const ctrl = this.control.at(index);
    console.log(' Modificando: ' + ctrl.value);
  }

  openAlert(msg: string) {
    this._dialogService.openAlert({
      message: msg,
      viewContainerRef: this._viewContainerRef,
      title: 'Alerta',
      closeButton: 'Cerrar',
    });
  }

  actualizar() {
    const conceptos: Array<NotaDeCreditoDet> = this.control.getRawValue();
    const importe = _.sumBy(conceptos, 'importe') ;
    const impuesto = _.sumBy(conceptos, 'impuesto');
    const total = importe + impuesto;
    this.form.patchValue({importe, impuesto, total});
    this.facturas = _.keyBy(this.control.getRawValue().map(it => it.cxc), 'id');
  }

}

export const PartidasValidator = (control: AbstractControl): {[key: string]: boolean} => {
  const partidas = (control.get('partidas') as FormArray).value;
  return partidas.length ? null : { sinPartidas: true };
};
