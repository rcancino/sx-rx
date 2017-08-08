import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './core/main/main.component';
import { HomeComponent } from './core/home/home.component';
import {AuthGuard} from './_auth/services/auth.gard';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'home', component: HomeComponent},
      { path: 'catalogos', loadChildren: './catalogos/catalogos.module#CatalogosModule'},
      { path: 'compras', loadChildren: './compras/compras.module#ComprasModule'},
      { path: 'cxp', loadChildren: './cxp/cxp.module#CxpModule'},
      // { path: 'analisis', loadChildren: './analisis/analisis.module#AnalisisModule'},
      // { path: 'productos', loadChildren: './productos/productos.module#ProductosModule'},
      // { path: 'proveedores', loadChildren: './proveedores/proveedores.module#ProveedoresModule'},
      { path: 'clientes', loadChildren: './clientes/clientes.module#ClientesModule'},
      { path: 'cxc', loadChildren: './cxc/cxc.module#CxcModule'},
      { path: 'security', loadChildren: './security/security.module#SecurityModule'},
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      // { path: '**', component: PageNotFoundComponent }
    ],
    canActivate: [AuthGuard],

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
