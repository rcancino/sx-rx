import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import {Cliente} from '../models/cliente';
import {environment} from '../../../environments/environment';

@Injectable()
export class ClientesService {

  readonly apiUrl =  `${environment.apiUrl}/clientes`;

  constructor(private http: HttpClient) { }

  list(term: string): Observable<Cliente[]> {
    console.log('searching clientes ', term)
    return this.http
      .get<Cliente[]>(this.apiUrl)
      .delay(1000);
  }

  get(clienteId: string): Observable<Cliente> {
    return this.http
      .get<Cliente>(this.apiUrl + `/${clienteId}`);
  }
}
