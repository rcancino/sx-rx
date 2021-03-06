import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from "./core/main/main.component";
import { HomeComponent } from "./core/home/home.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'home', component: HomeComponent},
      { path: 'catalogos', loadChildren: './catalogos/catalogos.module#CatalogosModule'},
      // { path: 'productos', loadChildren: './productos/productos.module#ProductosModule'},
      // { path: 'proveedores', loadChildren: './proveedores/proveedores.module#ProveedoresModule'},
      // { path: 'compras', loadChildren:'./compras/compras.module#ComprasModule'},
      // { path: 'cxp', loadChildren:'./cxp/cxp.module#CxpModule'},
      // { path: 'analisis', loadChildren: './analisis/analisis.module#AnalisisModule'}
      { 
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      //{ path: '**', component: PageNotFoundComponent }
    ]

  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
