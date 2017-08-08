import { NgModule } from '@angular/core';

import {SharedModule} from '../shared/shared.module';
import { SecurityRoutingModule } from './security-routing.module';
import { SecurityPageComponent } from './_pages/security-page/security-page.component';
import {UsersService} from './services/users.service';
import { UsersPageComponent } from './_pages/users-page/users-page.component';
import { RolsPageComponent } from './_pages/rols-page/rols-page.component';
import {StoreModule} from '@ngrx/store';

import { reducers } from './reducers';
import {EffectsModule} from '@ngrx/effects';
import {UsersListEfects} from './effects/users-list.efects';

@NgModule({
  imports: [
    SharedModule,
    SecurityRoutingModule,
    /**
     * StoreModule.forFeature is used for composing state
     * from feature modules. These modules can be loaded
     * eagerly or lazily and will be dynamically added to
     * the existing state.
     */
    StoreModule.forFeature('users', reducers),

    /**
     * Effects.forFeature is used to register effects
     * from feature modules. Effects can be loaded
     * eagerly or lazily and will be started immediately.
     *
     * All Effects will only be instantiated once regardless of
     * whether they are registered once or multiple times.
     */
    EffectsModule.forFeature([UsersListEfects]),
  ],
  declarations: [SecurityPageComponent, UsersPageComponent, RolsPageComponent],
  providers: [UsersService]

})
export class SecurityModule { }
