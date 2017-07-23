import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sx-compras-page',
  templateUrl: './compras-page.component.html',
  styleUrls: ['./compras-page.component.scss']
})
export class ComprasPageComponent implements OnInit {

  navmenu: Object[] = [
    {route: 'pendientes', title: 'Pendientes', description: 'Por recibir', icon:  'store', tooltip: 'Compras pendientes'},
    {route: 'atendidas', title: 'Atendidas', icon: 'blur_linear'},
    {route: 'alcance', title: 'Alcance ', icon: 'repeat'},
    {route: 'recepciones', title: 'Recepciones', icon: 'flight_land'},
    {route: 'existencias', title: 'Existencias', icon: 'layers'},
    {route: 'dashboard', title: 'Dashboard', icon: 'dashboard'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
