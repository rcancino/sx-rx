import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import {Marca} from '../../models/marca';

@Injectable()
export class MarcasService {
  readonly url = 'https://localhost:9090/siipapx/api/marcas';
  constructor(private http: Http) { }

  get() : Observable<Marca[]> {
    return this.http.get(this.url).map(response => response.json());
  }


}
