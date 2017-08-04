import { NgModule, } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { FlexLayoutModule, } from '@angular/flex-layout';
import {
  CovalentDataTableModule, CovalentMediaModule, CovalentLoadingModule,
  CovalentNotificationsModule, CovalentLayoutModule, CovalentMenuModule,
  CovalentPagingModule, CovalentSearchModule, CovalentStepsModule,
  CovalentCommonModule, CovalentDialogsModule, CovalentMessageModule, CovalentExpansionPanelModule,
  CovalentJsonFormatterModule,
} from '@covalent/core';
import {
  MdButtonModule, MdCardModule, MdIconModule,
  MdListModule, MdMenuModule, MdTooltipModule,
  MdSlideToggleModule, MdInputModule, MdCheckboxModule,
  MdToolbarModule, MdSnackBarModule, MdSidenavModule,
  MdTabsModule, MdSelectModule, MdChipsModule, MdAutocompleteModule, MdDatepickerModule, MdNativeDateModule
} from '@angular/material';
import { NgxChartsModule, } from '@swimlane/ngx-charts';

import {ModuloLabelComponent} from './modulo-label/modulo-label.component';
import { PageToolbarComponent } from './page-toolbar/page-toolbar.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { NavListPageComponent } from './nav-list-page/nav-list-page.component';
import { NavPageComponent } from './nav-page/nav-page.component';
import { AddressPipe } from './pipes/address.pipe';
import { ModuleSelectorComponent } from './module-selector/module-selector.component';
import { ComentarioFieldComponent } from './_fields/comentario-field/comentario-field.component';
import { UsoCfdiFieldComponent } from './_fields/uso-cfdi-field/uso-cfdi-field.component';


const FLEX_LAYOUT_MODULES: any[] = [
  FlexLayoutModule,
];

const ANGULAR_MODULES: any[] = [
  FormsModule, ReactiveFormsModule,
];

const MATERIAL_MODULES: any[] = [
  MdButtonModule, MdCardModule, MdIconModule,
  MdListModule, MdMenuModule, MdTooltipModule,
  MdSlideToggleModule, MdInputModule, MdCheckboxModule,
  MdToolbarModule, MdSnackBarModule, MdSidenavModule,
  MdTabsModule, MdSelectModule, MdChipsModule, MdAutocompleteModule, MdNativeDateModule, MdDatepickerModule,
];

const COVALENT_MODULES: any[] = [
  CovalentDataTableModule, CovalentMediaModule, CovalentLoadingModule,
  CovalentNotificationsModule, CovalentLayoutModule, CovalentMenuModule,
  CovalentPagingModule, CovalentSearchModule, CovalentStepsModule,
  CovalentCommonModule, CovalentDialogsModule, CovalentMessageModule,
  CovalentExpansionPanelModule, CovalentJsonFormatterModule,
];

const CHART_MODULES: any[] = [
  NgxChartsModule,
];

const COMPONENTS: any[] = [
  ModuleSelectorComponent,
  UsoCfdiFieldComponent,
  ComentarioFieldComponent
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ANGULAR_MODULES,
    MATERIAL_MODULES,
    COVALENT_MODULES,
    CHART_MODULES,
    FLEX_LAYOUT_MODULES,
  ],
  declarations: [
    ...COMPONENTS,
    ModuloLabelComponent,
    PageToolbarComponent,
    PageFooterComponent,
    NavListPageComponent,
    NavPageComponent,
    AddressPipe,
    ComentarioFieldComponent,
    UsoCfdiFieldComponent
  ],
  exports: [
    ANGULAR_MODULES,
    MATERIAL_MODULES,
    COVALENT_MODULES,
    CHART_MODULES,
    FLEX_LAYOUT_MODULES,
    COMPONENTS,
    ModuloLabelComponent,
    PageToolbarComponent,
    PageFooterComponent,
    NavListPageComponent,
    NavPageComponent,
    AddressPipe
  ]
})
export class SharedModule { }
