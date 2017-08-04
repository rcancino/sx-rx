import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Cliente} from '../../../clientes/models/cliente';
import {Subscription} from 'rxjs/Subscription';
import {environment} from '../../../../environments/environment';

const mapClientes = (clientes: Cliente[]) => {
  const res = clientes.map( cliente => {
    return {
     id: cliente.id,
     nombre: cliente.nombre,
      rfc: cliente.rfc
    };
  });
  return res;
}

@Component({
  selector: 'sx-cliente-field',
  templateUrl: './cliente-field.component.html',
  styles: []
})
export class ClienteFieldComponent implements OnInit, OnDestroy {

  @Input() parent: FormGroup;

  private subscription: Subscription;

  clientes: Cliente[] = [];

  readonly apiUrl = environment.apiUrl + '/clientes';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.subscription = this.parent.get('cliente').valueChanges
      .debounceTime(300)
      .distinctUntilChanged()
      .subscribe( value => {
        this.findClientes(value);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  findClientes(value: string) {
    this.http.get<Cliente[]>(this.apiUrl,
      {params: new HttpParams().set('term', value)})
      .map( mapClientes )
      .subscribe( res => this.clientes = res);
  }



  displayFn(cliente: Cliente) {
    return cliente ? cliente.nombre : cliente;
  }

}
