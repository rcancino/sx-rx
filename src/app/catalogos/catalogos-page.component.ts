
import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { TdMediaService } from '@covalent/core';
import { Title } from '@angular/platform-browser';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';

import {Modulo} from '../models/modulo';
import * as fromRoot from '../reducers'

@Component({
  selector: 'sx-catalogos-page',
  templateUrl: './catalogos-page.component.html',
  styleUrls: ['./catalogos-page.component.scss']
})
export class CatalogosPageComponent implements OnInit, AfterViewInit {

  modulo$: Observable<Modulo>;
  routes: Object[] = [
    {path: 'lineas', name: 'Lineas', icon:  'dashboard', descripcion: 'Clasificación principal de productos'},
    {path: 'marcas', name: 'Marcas', icon:  'view_compact', descripcion: 'Sub clasifición de productos'},
    {path: 'clases', name: 'Clases', icon:  'view_compact', descripcion: 'Sub clasifición de productos'},
    {path: 'proveedores', name: 'Proveedores', icon:  'group', descripcion: 'Catálogo de proveedores'},
    {path: 'productos', name: 'Productos', icon:  'layers', descripcion: 'Catálogo de productos'},
  ];

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    public media: TdMediaService,
    public title: Title,
    private store: Store<fromRoot.State>) {

    // Modulo actualmente seleccionado
    // this.modulo$ = store.select(fromRoot.getCurrentModulo)
    this.modulo$ = Observable.of({nombre: 'SX Compras'})
  }

  ngOnInit() {
    this.title.setTitle('Catálogos (Sx Compras)');
  }

  ngAfterViewInit(): void {
    this.media.broadcast();

    // force a new change detection cycle since change detections
    // have finished when `ngAfterViewInit` is executed
    this._changeDetectorRef.detectChanges();
  }



}
