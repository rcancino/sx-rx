import { NgModule } from '@angular/core';

import { LineasService } from "../store/services/lineas.service";



@NgModule({
  imports: [LineasService],
  exports: [LineasService],
  declarations: [],
  providers: [],
})
export class SxStoreModule { }
