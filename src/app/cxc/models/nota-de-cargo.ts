import {Cliente} from '../../clientes/models/cliente';
import {Sucursal} from '../../models/sucursal';

export class NotaDeCargo {
  id: string;
  cliente: Cliente;
  sucursal: Sucursal;
  fecha: string | Date;
  documento: string;
  importe: number;
  impuesto: number;
  total: number;
}
