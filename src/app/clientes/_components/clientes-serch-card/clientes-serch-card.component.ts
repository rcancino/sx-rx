import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Cliente} from '../../models/cliente';
import {Observable} from 'rxjs/Observable';
import {TdLoadingService} from '@covalent/core';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'sx-clientes-serch-card',
  templateUrl: './clientes-serch-card.component.html',
  styleUrls: ['./clientes-serch-card.component.scss']
})
export class ClientesSerchCardComponent implements OnInit, OnDestroy {


  @Output() search = new EventEmitter<string>();

  @Input() clientes: Array<Cliente> = [] ;

  @Input() busy$: Observable<boolean>;

  @Output() showCliente = new EventEmitter<string>();

  subscription: Subscription;

  constructor(private _loadingService: TdLoadingService) {
  }

  ngOnInit() {
    this.subscription = this.busy$.subscribe((val: boolean) => {
      if (val) {
        this._loadingService.register('clientes-search')
      } else {
        this._loadingService.resolve('clientes-search');
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSearch(value: string) {
    this.search.emit(value);
  }

  onShow(cliente: Cliente) {
    this.showCliente.emit(cliente.id);
  }

  test() {
    console.log('testing');
    throw new Error('Testing error handling...');
  }
}
