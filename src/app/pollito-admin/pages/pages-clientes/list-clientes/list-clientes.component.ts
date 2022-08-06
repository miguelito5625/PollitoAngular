import { Component, OnDestroy, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../../@core/data/smart-table';
import { Cliente } from '../../../../interfaces/cliente';
import { ClientesService } from '../../../../servicios/clientes.service';

@Component({
  selector: 'ngx-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.scss']
})
export class ListClientesComponent implements OnInit, OnDestroy {

  clientes: Array<Cliente> = [];

  private subscribeObtenerClientes;

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscribeObtenerClientes.unsubscribe();
  }

  settings = {
    // add: {
    //   addButtonContent: '<i class="nb-plus"></i>',
    //   createButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',
    // },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    actions: {
      add: false,
      // edit: false,
      custom: [
        {
          name: 'mostrarDatos',
          title: '<i class="nb-lightbulb" title="Mostrar datos"></i>',
        },
      ]
    },
    columns: {
      dpi: {
        title: 'Dpi',
        type: 'string',
      },
      primer_nombre: {
        title: 'Primer Nombre',
        type: 'string',
      },
      segundo_nombre: {
        title: 'Segundo Nombre',
        type: 'string',
      },
      primer_apellido: {
        title: 'Primer Apellido',
        type: 'string',
      },
      segundo_apellido: {
        title: 'Segundo Apellido',
        type: 'string',
      },
      departamento: {
        title: 'Departamento',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(
    private service: SmartTableData,
    private servicioClientes: ClientesService
  ) {

    this.subscribeObtenerClientes = servicioClientes.obtenerClientes().subscribe(
      (res) => {
        // console.log("CLIENTES:");
        // console.log(res['Data']);

        res['Data'].forEach(element => {
          const cliente: Cliente = {
            id_persona: element.Persona.ID,
            id_cliente: element.ID,
            dpi: element.Persona.Dpi,
            primer_nombre: element.Persona.primer_nombre,
            segundo_nombre: element.Persona.segundo_nombre,
            primer_apellido: element.Persona.primer_apellido,
            segundo_apellido: element.Persona.segundo_apellido,
            departamento: element.Persona.departamento,
            municipio: element.Persona.municipio,
            direccion: element.Persona.direccion,
            indicaciones: element.indicaciones
          };
          this.clientes.push(cliente);
        });
        this.source.load(this.clientes);
      },
      (err) => {
        console.log(err);
      }
    );
    // const data = this.service.getData();
    // this.source.load(data);
  }

  onDeleteConfirm(event): void {
    console.log(event);

    // if (window.confirm('Are you sure you want to delete?')) {
    //   event.confirm.resolve();
    // } else {
    //   event.confirm.reject();
    // }
  }

  onSaveConfirm(event) {
    console.log('Nuevos Datos');
    console.log(event.newData);
    event.confirm.resolve(event.newData);
  }


  onCustomEvent(event) {
    console.log(event);
    switch (event.action) {
      case 'mostrarDatos':
        console.log("Preparando mostrar datos");

        break;
      case 'otroCustom':
        console.log('Otro custom');
        break;
    }
  }

}
