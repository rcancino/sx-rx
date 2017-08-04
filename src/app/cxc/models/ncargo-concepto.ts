import {CuentaPorCobrar} from './cuentaPorCobrar';

export class NotaDeCargoConcepto {
  id?: string;
  concepto: string;
  cargo = 0.0;
  importe = 0.0;
  impuesto = 0.0;
  cxc?: CuentaPorCobrar;
  conceptoSat: ConceptoSat;

  constructor(cxc: CuentaPorCobrar, cargo: number ) {
    this.cxc = cxc;
    this.cargo = cargo;
    this.concepto = 'Cargos moratorios';
    this.importe = cxc.importe * cargo;
    this.impuesto = cxc.impuesto = this.importe * 0.16;
    this.conceptoSat = new ConceptoSat();
  }

}

export class ConceptoSat {

  claveProdServ = '01010101';
  numeroDeIdentificacion = 'CARGOS';
  cantidad = 1.0;
  unidad = 'P1';
  valorUnitario = 0.0

  constructor() {
  }

}





