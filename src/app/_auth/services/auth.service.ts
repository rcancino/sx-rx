import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';
import { User, Authenticate } from '../models/user';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class AuthService {

  private readonly url = environment.apiUrl + '/login';

  constructor(private  http: HttpClient) {}

  login(auth: Authenticate) {
    return this.http.post(this.url, auth)
  }

  logout() {
    return of(true);
  }

  dummyLogin(auth: Authenticate){
    /**
     * Simulate a failed login to display the error
     * message for the login form.
     */
    if (auth.username !== 'test') {
      return _throw('Invalid username or password');
    }
    return of({ username: 'User', token: 'jwt' });
  }
}
