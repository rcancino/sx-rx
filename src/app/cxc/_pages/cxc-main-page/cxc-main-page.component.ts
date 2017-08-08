import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sx-cxc-main-page',
  templateUrl: './cxc-main-page.component.html',
  styleUrls: ['./cxc-main-page.component.scss']
})
export class CxcMainPageComponent implements OnInit {

  navmenu: Object[] = [
    {
      route: 'notasDeCargo',
      title: 'Notas de cargo',
      description: '',
      icon:  'receipt',
      tooltip: 'Notas de cargo a clientes'
    },
    {
      route: 'notaDeCredito',
      title: 'Nota de crédito',
      descripcion: 'Descuentos, Devoluciones, Bonificaciones',
      icon: 'receipt',
      tooltip: 'Notas de crédito'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
