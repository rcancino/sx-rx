export interface Modulo {
  nombre: string
}

export const MODULOS: { [id: string]: Modulo } = {
  'compras': {
    nombre: 'SX Compras'
  },
  'ventas': {
    nombre: 'Ventas'
  }
};
