import {Cliente} from '../../clientes/models/cliente';
import {Sucursal} from '../../models/sucursal';

export class NotaDeCargo {
  id: string;
  cliente: Cliente;
  sucursal: Sucursal;
  fecha: string | Date;
  usoCfdi?: string;
  cargo: number;
  documento: string;
  importe: number;
  impuesto: number;
  total: number;
  cartera: string;
}
