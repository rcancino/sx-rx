import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";


@Component({
  selector: 'sx-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  modulo$: Observable<any>;
  navegacion$: Observable<any[]>;
  //lastError$: Observable<any>;


  usermenu: Object[] = [{
      icon: 'swap_horiz',
      route: '.',
      title: 'Switch account',
    }, {
      icon: 'tune',
      route: '.',
      title: 'Account settings',
    }, {
      icon: 'exit_to_app',
      route: '.',
      title: 'Sign out',
    },
  ];
  
  constructor() {
    this.modulo$ = Observable.of({
	    id: 1, nombre: 'SX Compras', 
	    descripcion: 'Compras de materia prima',
	    image: "url('https://static.pexels.com/photos/348323/pexels-photo-348323.jpeg')"
	  },);
    this.navegacion$ = Observable.of([
        { title: 'Inicio', path: '', icon: 'home'},
        { title: 'Catálogos',path: '/catalogos',icon: 'view_quilt'},
        { title: 'Compras',path: '/compras',icon: 'shopping_cart'},
        { title: 'CxP', path: '/cxp', icon: 'my_library_books'},
        { title: 'Analisis', path: '/analisis', icon: 'compare'},
        { title: 'Dashboards', path: '/dashboards', icon: 'dashboard'},
        { title: 'Productos', path: '/productos', icon: 'layers'},
        { title: 'Proveedores', path: '/proveedores', icon: 'group'},
      ],);
    //this.lastError$ = Observable.of
    
   }

  ngOnInit() {
    
    
  }

}

 