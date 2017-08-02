import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';




@NgModule({
  imports: [
    SharedModule,
    RouterModule,
  ],
  declarations: [MainComponent, HomeComponent, SidenavComponent],
  exports: [MainComponent, HomeComponent],
})
export class CoreModule { }
