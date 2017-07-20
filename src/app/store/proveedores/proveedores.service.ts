import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import {Proveedor} from '../../models/proveedor';
import {environment} from '../../../environments/environment';

@Injectable()
export class ProveedoresService {

  readonly url = environment.apiUrl;

  constructor(private http: Http) {}

  get(): Observable<Proveedor[]> {
    return this.http.get(this.url + '/proveedores')
      .map(response => response.json());
  }
}
