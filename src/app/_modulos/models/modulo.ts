export interface Modulo {
  id: number;
  nombre: string;
  descripcion: string;
  icon?: string;
  path?: string;
  routes?: Array<any>;
  roles?: string[]
}
