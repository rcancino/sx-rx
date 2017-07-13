import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Linea } from "../../models/linea";

@Injectable()
export class LineasService {

  readonly api = 'api/lineas';
  
  constructor(private http: Http) { }

  get() : Observable<any> {
    return this.http.get('api/lineas');
  }

  list() : Observable<Linea[]> {
    return this.http.get(this.api)
      .map(response => response.json());
  }


}