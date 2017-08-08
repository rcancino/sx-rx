import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SecurityPageComponent} from './_pages/security-page/security-page.component';
import {UsersPageComponent} from './_pages/users-page/users-page.component';
import { RolsPageComponent } from './_pages/rols-page/rols-page.component';

const routes: Routes = [
  {
    path: '',
    component: SecurityPageComponent,
    children: [
      {
        path: 'usuarios',
        component: UsersPageComponent
      },
      {
        path: 'roles',
        component: RolsPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
