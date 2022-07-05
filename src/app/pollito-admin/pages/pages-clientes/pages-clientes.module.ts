import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesClientesRoutingModule } from './pages-clientes-routing.module';
import { ListClientesComponent } from './list-clientes/list-clientes.component';
import { ThemeModule } from '../../../@theme/theme.module';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbMenuModule, NbRadioModule, NbSelectModule, NbTreeGridModule, NbUserModule } from '@nebular/theme';
import { PagesClientesComponent } from './pages-clientes.component';
import { FsIconComponent } from '../../../pages/tables/tree-grid/tree-grid.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CrearClientesComponent } from './crear-clientes/crear-clientes.component';
import { FormsRoutingModule } from '../../../pages/forms/forms-routing.module';
import { FormsModule as ngFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListClientesComponent,
    PagesClientesComponent,
    CrearClientesComponent
  ],
  imports: [
    CommonModule,
    PagesClientesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,

    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    FormsRoutingModule,
    NbSelectModule,
    ngFormsModule,
  ]
})
export class PagesClientesModule { }
