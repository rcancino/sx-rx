import {CuentaPorCobrar} from './cuentaPorCobrar';

export class NotaDeCreditoDet {
  id?: string;
  concepto: string;
  descuento = 0.0;
  importe = 0.0;
  impuesto = 0.0;
  cxc?: CuentaPorCobrar;
  conceptoSat: ConceptoSat;

  constructor(cxc: CuentaPorCobrar, descuento: number ) {
    this.cxc = cxc;
    this.descuento = descuento;
    this.concepto = 'Cargos moratorios';
    this.importe = cxc.importe * descuento;
    this.impuesto = cxc.impuesto = this.importe * 0.16;
    this.conceptoSat = new ConceptoSat();
  }

  public toString(): string {
    if (this.cxc) {
      return `${this.concepto} Dcto: ${this.cxc}`
    } else {
      return `${this.concepto}`;
    }
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





