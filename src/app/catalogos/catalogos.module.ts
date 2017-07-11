import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CatalogosRoutingModule } from './catalogos-routing.module';
import { CatalogosPageComponent } from './catalogos-page.component';
import { LineasComponent } from './lineas/lineas.component';
import { MarcasComponent } from './marcas/marcas.component';
import { ClasesComponent } from './clases/clases.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ProductosComponent } from './productos/productos.component';

@NgModule({
  imports: [
    SharedModule,
    CatalogosRoutingModule
  ],
  declarations: [CatalogosPageComponent, LineasComponent, MarcasComponent, ClasesComponent, ProveedoresComponent, ProductosComponent]
})
export class CatalogosModule { }
