import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesClientesRoutingModule } from './pages-clientes-routing.module';
import { ListClientesComponent } from './list-clientes/list-clientes.component';
import { ThemeModule } from '../../../@theme/theme.module';
import { NbMenuModule } from '@nebular/theme';
import { PagesClientesComponent } from './pages-clientes.component';


@NgModule({
  declarations: [
    ListClientesComponent,
    PagesClientesComponent
  ],
  imports: [
    CommonModule,
    PagesClientesRoutingModule,
    ThemeModule,
    NbMenuModule,
  ]
})
export class PagesClientesModule { }
