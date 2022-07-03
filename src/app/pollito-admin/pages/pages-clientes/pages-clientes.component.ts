import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from '../../../pages/pages-menu';

@Component({
  selector: 'ngx-pages-clientes',
  templateUrl: './pages-clientes.component.html',
  styleUrls: ['./pages-clientes.component.scss']
})
export class PagesClientesComponent implements OnInit {

  menu = MENU_ITEMS;

  constructor() { }

  ngOnInit(): void {
  }

}
