import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogosPageComponent } from "./catalogos-page.component";
import { LineasComponent } from "./lineas/lineas.component";
import { MarcasComponent } from "./marcas/marcas.component";
import { ClasesComponent } from "./clases/clases.component";
import { ProductosComponent } from "./productos/productos.component";
import { ProveedoresComponent } from "./proveedores/proveedores.component";

const routes: Routes = [
  {
    path: '',
    component: CatalogosPageComponent,
    children: [
      { path: 'lineas', component: LineasComponent},
      { path: 'marcas', component: MarcasComponent},
      { path: 'clases', component: ClasesComponent},
      { path: 'productos', component: ProductosComponent},
      { path: 'proveedores', component: ProveedoresComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogosRoutingModule { }
