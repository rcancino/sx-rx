import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import * as _ from 'lodash';
import {NotaDeCargo} from '../models/nota-de-cargo';
import {environment} from '../../../environments/environment';

@Injectable()
export class NotasDeCargoService {

  readonly apiUrl = environment.apiUrl + '/notasDeCredito';

  constructor(private http: HttpClient) { }

  list(filter: any = {}): Observable<NotaDeCargo[]>  {
    let params = new HttpParams();
    _.forOwn(filter, (value, key) => params = params.append(key, value));
    console.log('Filtro: ', filter.keys);
    return this.http.get(this.apiUrl, {params: params})
  }

}
