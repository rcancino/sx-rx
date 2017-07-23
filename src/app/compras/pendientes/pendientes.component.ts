import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {Router, ActivatedRoute} from '@angular/router';

import {Compra} from '../../models/compra';
import * as fromRoot from '../../store';
import * as actions from '../../store/compras/compras.actions';



@Component({
  selector: 'sx-pendientes',
  templateUrl: './pendientes.component.html',
  styles: []
})
export class PendientesComponent implements OnInit {

  compras$: Observable<Compra[]>;

  constructor(
    private store: Store<fromRoot.State>,
    private router: Router,
    private route: ActivatedRoute) {
    this.compras$ = store.select(fromRoot.getComprasPendientes);
  }

  ngOnInit() {
    this.store.dispatch(new actions.LoadAction());
  }

  onInfo(compraId: number) {
    console.log('Info compra: ', compraId);
    this.router.navigate(['show', compraId], {relativeTo: this.route});
  }
  onEdit(compraId: number) {
    console.log('Edit compra: ', compraId);
  }

  search(term: string) {
    console.log('Buscando: ', term);
  }

}
