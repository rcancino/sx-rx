import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';

import { AnalisisRoutingModule } from './analisis-routing.module';
import { AnalisisPageComponent } from './analisis-page.component';

@NgModule({
  imports: [
    SharedModule,
    AnalisisRoutingModule
  ],
  declarations: [AnalisisPageComponent]
})
export class AnalisisModule { }
