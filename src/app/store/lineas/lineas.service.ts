import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import {Linea} from '../../models/linea';


@Injectable()
export class LineasService {

  readonly url = 'api/lineas';

  constructor(private http: HttpClient) { }

  get(): Observable<Linea[]> {
    return this.http.get<Linea[]>(this.url)
      .shareReplay();
  }


}
