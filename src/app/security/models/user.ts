export interface User {
  id: string;
  accountExpired: boolean;
  accountLocked: boolean;
  apellidoMaterno: string;
  apellidoPaterno: string;
  enabled: boolean,
  nombre: string;
  nombres: string;
  numeroDeEmpleado: number;
  password: string;
  passwordExpired: boolean;
  username: string;
  email?: string;
}
