
import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { TdMediaService } from '@covalent/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'sx-catalogos-page',
  templateUrl: './catalogos-page.component.html',
  styleUrls: ['./catalogos-page.component.scss']
})
export class CatalogosPageComponent implements OnInit, AfterViewInit {

  
  routes: Object[] = [
    {path: 'lineas', name: 'Lineas',icon:  'dashboard', descripcion:'Clasificación principal de productos'},
    {path: 'marcas', name: 'Marcas',icon:  'view_compact', descripcion:'Sub clasifición de productos'},
    {path: 'clases', name: 'Clases',icon:  'view_compact', descripcion:'Sub clasifición de productos'},
    {path: 'proveedores', name: 'Proveedores',icon:  'group', descripcion:'Catálogo de proveedores'},
    {path: 'productos', name: 'Productos',icon:  'layers', descripcion:'Catálogo de productos'},
  ];

  isOpen: boolean = true;

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    public media: TdMediaService,
    public title: Title) { 
     
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
