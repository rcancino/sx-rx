import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../../environments/environment';

import {Observable} from 'rxjs/Observable';
import {User} from '../models/user';

@Injectable()
export class UsersService {

  readonly apiUrl = `${environment.apiUrl}/security/users`;

  constructor(private http: HttpClient) { }

  list(): Observable<User[]> {
    return this.http
      .get(this.apiUrl)
      .shareReplay();
  }

}
