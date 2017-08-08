import {AfterViewInit, Component, OnInit} from '@angular/core';
import {TdMediaService} from '@covalent/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'sx-security-page',
  templateUrl: './security-page.component.html',
  styleUrls: ['./security-page.component.scss']
})
export class SecurityPageComponent implements OnInit, AfterViewInit {

  navmenu: Object[] = [
    {
      route: 'usuarios',
      title: 'Usuarios',
      description: 'Mantenimiento de usuarios',
      icon:  'people',
      tooltip: 'Administración de usuarios'
    },
    {
      route: 'roles',
      title: 'Roles de acceso',
      description: 'Consulta de accesos registrados',
      icon: 'receipt',
      tooltip: 'Control de roles de accesos al sistema '
    }
  ];

  constructor(
    public media: TdMediaService,
    private _titleService: Title) {
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    this.media.broadcast();
    this._titleService.setTitle( 'SIIPAPX Seguridad' );

  }

}
