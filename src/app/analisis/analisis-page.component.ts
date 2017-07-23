import {AfterViewInit, ChangeDetectorRef, Component} from '@angular/core';
import {TdMediaService} from '@covalent/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'sx-analisis-page',
  templateUrl: './analisis-page.component.html',
  styleUrls: ['./analisis-page.component.scss']
})
export class AnalisisPageComponent implements AfterViewInit {

  navmenu: Object[] = [
    {route: 'facturas', title: 'Facturas', description: 'Revisión de facturas de materia prima', icon:  'folder'},
    {route: 'fletes', title: 'Fletes', description: 'Revisión de fletes', icon:  'folder'},
    {
      route: 'transformaciones',
      title: 'Transformaciones',
      description: 'Facturas de cortes',
      tooltip: 'Transformación de materia prima',
      icon:  'folder'
    }
  ];

  constructor(private _changeDetectorRef: ChangeDetectorRef,
              public media: TdMediaService,
              private title: Title) {}

  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    this.media.broadcast();
    this._changeDetectorRef.detectChanges();
    this.title.setTitle('Análisis de facturas');
  }

}
