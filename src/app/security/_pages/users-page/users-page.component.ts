import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from '../../models/user';
import {UsersService} from '../../services/users.service';
import {TdLoadingService} from '@covalent/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Store} from '@ngrx/store';

import * as fromUsers from '../../reducers';
import * as usersActions from '../../actions/user.actions';

@Component({
  selector: 'sx-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

  /**
   * Observable list of users
   */
  users$: Observable<User[]>;
  /**
   * Subject that acts as an Observable to produce search strings
   *
   * @type {BehaviorSubject<string>}
   */
  search$ = new BehaviorSubject<string>('');

  filtrados$: Observable<any>;

  selected: User = null;

  constructor(
    private store: Store<fromUsers.UsersState>,
    private  usersService: UsersService
    ) { }

  ngOnInit() {
    this.users$ = this.usersService
      .list().delay(3000);
    this.filtrados$ = this.search$
      .asObservable()
      .combineLatest(this.users$, (term, usuarios) => {
        return this.filtrar(usuarios, term);
      });
  }

  filter(term: string) {
    this.search$.next(term);
  }

  filtrar(usuarios: User[], term: string = '') {
    return usuarios.filter((user: User) => {
      return user.nombre.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }



  showInfo(user: User) {
    this.selected = user;
    this.store.dispatch(new usersActions.SelectAction(user));
  }

}
