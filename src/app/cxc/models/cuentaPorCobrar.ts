
export class CuentaPorCobrar {
  id: string;
  documento: string;
  fecha: string | Date;
  tipoDocumento: string;
  cliente: string;
  importe: number;
  impuesto: number;
  total: number;

  toString() {
    return `${this.documento} ${this.tipoDocumento} ${this.cliente} ${this.fecha} ${this.total} `;
  }
}
