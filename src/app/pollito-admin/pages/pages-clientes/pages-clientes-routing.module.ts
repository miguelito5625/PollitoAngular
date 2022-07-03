import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../../../pages/miscellaneous/not-found/not-found.component';
import { ListClientesComponent } from './list-clientes/list-clientes.component';
import { PagesClientesComponent } from './pages-clientes.component';

const routes: Routes = [{
  path: '',
  component: PagesClientesComponent,
  children: [
    {
      path: 'list',
      component: ListClientesComponent,
    },
    {
      path: '',
      redirectTo: 'list',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesClientesRoutingModule { }
