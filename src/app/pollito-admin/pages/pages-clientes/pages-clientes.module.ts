import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesClientesRoutingModule } from './pages-clientes-routing.module';
import { ListClientesComponent } from './list-clientes/list-clientes.component';
import { ThemeModule } from '../../../@theme/theme.module';
import { NbCardModule, NbIconModule, NbInputModule, NbMenuModule, NbTreeGridModule } from '@nebular/theme';
import { PagesClientesComponent } from './pages-clientes.component';
import { FsIconComponent } from '../../../pages/tables/tree-grid/tree-grid.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
  declarations: [
    ListClientesComponent,
    PagesClientesComponent,
    // FsIconComponent
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
  ]
})
export class PagesClientesModule { }
