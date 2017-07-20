import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import {Clase} from '../../models/clase';
import {environment} from '../../../environments/environment';

@Injectable()
export class ClasesService {

  readonly  url = environment.apiUrl;

  constructor(private http: Http) { }

  get(): Observable<Clase[]> {
    return this.http.get(this.url + '/clases')
      .map( response => response.json());
  }
}
