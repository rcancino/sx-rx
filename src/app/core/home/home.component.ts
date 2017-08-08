import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TdMediaService } from '@covalent/core';
import { Title } from '@angular/platform-browser';
import { Observable } from "rxjs/Observable";


@Component({
  selector: 'sx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  application$: Observable<any>;

  constructor(public media: TdMediaService,
              private _titleService: Title) {
    // this.application$ = store.select(fromRoot.getApplication).delay(500);
    this.application$ = Observable.of(
      {
        nombre: 'SIIPAP-Rx ',
	      descripcion: 'Sistema de administración SIIPAP Rx cloud service',
	      image: "url('https://static.pexels.com/photos/265087/pexels-photo-265087.jpeg)"
	    });
   }

  ngOnInit() {}

  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    this.media.broadcast();
    this._titleService.setTitle( 'SIIPAP-Rx' );

  }

}
