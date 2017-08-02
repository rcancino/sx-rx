import {Component, OnDestroy, OnInit} from '@angular/core';
import {TdLoadingService} from '@covalent/core';
import {Store} from '@ngrx/store';

import {Authenticate} from '../models/user';
import * as fromAuth from '../reducers';
import * as Auth from '../actions/auth.actions';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'sx-login-page',
  templateUrl: './login-page.component.html',
  styles: []
})
export class LoginPageComponent implements OnInit, OnDestroy {

  pending$
  error$
  substription: Subscription;

  constructor(private store: Store<fromAuth.State>, private loadingService: TdLoadingService) {
    this.pending$ = this.store.select(fromAuth.getLoginPagePending);
    this.error$ = this.store.select(fromAuth.getLoginPageError);
  }

  ngOnInit() {
    this.substription = this.pending$.subscribe( value => {
      if (value) {
        this.loadingService.register('login-pending');
      } else {
        this.loadingService.resolve('login-pending');
      }
    });
  }

  ngOnDestroy(){
    this.substription.unsubscribe();
  }

  onLogin($event: Authenticate) {
    this.store.dispatch(new Auth.Login($event));
  }

}
