import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {environment} from '../../../environments/environment';

import {Compra} from '../../models/compra';

@Injectable()
export class ComprasService {

  private readonly url = environment.apiUrl + '/compras';

  constructor(private httpClient: HttpClient) { }

  list(): Observable<Compra[]> {
    return this.httpClient.get<Compra[]>(this.url);
  }


}
