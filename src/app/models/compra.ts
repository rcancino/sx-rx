export interface  Compra {
  id: string
  sucursal: string
  folio: number
  fecha: string
  entrega?: string
  proveedor: string
  comentario?: string
  pendiente: boolean
  centralizada: boolean
  nacional: boolean
  consolidada: boolean
  especial: boolean
  importeBruto: number
  importeDescuento: number
  importeNeto: number
  impuestos: number
  total: number
  partidas: Array<any>
  tipoDeCambio: number
  modificado: string
  sw2?: string
}
