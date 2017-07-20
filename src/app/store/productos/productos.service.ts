import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Producto} from '../../models/producto';
import {environment} from '../../../environments/environment';

@Injectable()
export class ProductosService {

  readonly url = environment.apiUrl;

  constructor(private http: Http) { }

  get(): Observable<Producto[]> {
    return this.http.get(this.url + '/productos')
      .map(res => res.json());
  }


}
