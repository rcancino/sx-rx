import {Cliente} from '../../clientes/models/cliente';
import {Sucursal} from '../../models/sucursal';

export class NotaDeCredito {
  id: string;
  cliente: Cliente;
  tipo: Tipo
  sucursal: Sucursal;
  fecha: string | Date;
  usoCfdi?: string;
  documento: string;
  importe: number;
  impuesto: number;
  total: number;
  cartera: string;
}

export const TIPOS = ['DESCUENTO', 'BONIFICACION', 'DEVOLUCION'];

export type Tipo = 'DESCUENTO' | 'BONIFICACION' | 'DEVOLUCION'
