import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import * as _ from 'lodash';
import { NotaDeCredito } from '../models/notaDeCredito';
import { environment } from '../../../environments/environment';

@Injectable()
export class NotasDeCreditoService {

  readonly apiUrl = environment.apiUrl + '/notasDeCredito';

  constructor(private http: HttpClient) { }

  list(filter: any = {}): Observable<NotaDeCredito[]>  {
    let params = new HttpParams();
    _.forOwn(filter, (value, key) => params = params.append(key, value));
    return this.http.get(this.apiUrl, {params: params})
  }

}
