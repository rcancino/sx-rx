import {AfterViewInit, ChangeDetectorRef, Component} from '@angular/core';
import {TdMediaService} from '@covalent/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'sx-cxp-page',
  templateUrl: './cxp-page.component.html',
  styleUrls: ['./cxp-page.component.scss']
})
export class CxpPageComponent implements AfterViewInit {

  constructor(private _changeDetectorRef: ChangeDetectorRef,
              public media: TdMediaService,
              private title: Title) {}

  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    this.media.broadcast();
    this._changeDetectorRef.detectChanges();
    this.title.setTitle('CxP (SX-Compras)');
  }

}
