import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Linea} from '../../models/linea';

@Injectable()
export class LineasService {

  readonly url = 'https://localhost:9090/siipapx/api/lineas';

  constructor(private http: Http) { }

  get(): Observable<Linea[]> {
    return this.http.get(this.url)
      .map( response => response.json());
  }


}
