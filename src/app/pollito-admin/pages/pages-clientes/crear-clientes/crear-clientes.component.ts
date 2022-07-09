import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Cliente } from '../../../../interfaces/cliente';
import { ClientesService } from '../../../../servicios/clientes.service';
import { DEPARTAMENTOS_Y_MUNICIPIOS } from '../../../../utilidades/guatemala';

@Component({
  selector: 'ngx-crear-clientes',
  templateUrl: './crear-clientes.component.html',
  styleUrls: ['./crear-clientes.component.scss']
})
export class CrearClientesComponent implements OnInit {

  formularioCliente = new FormGroup({
    dpi: new FormControl('545646526'),
    primerNombre: new FormControl('Miguel'),
    segundoNombre: new FormControl('Angel'),
    primerApellido: new FormControl('Archila'),
    segundoApellido: new FormControl('Garcia'),
    departamento: new FormControl('Izabal'),
    municipio: new FormControl('Los Amates'),
    direccion: new FormControl('Barrio los cocos, Quirigua'),
    indicaciones: new FormControl('cerca de un lugar'),
  });

  departamentos: Array<String> = [];
  municipios: Array<String> = [];

  constructor(
    private servicioClientes: ClientesService
  ) {
    this.retornarDepartamentos();
  }

  ngOnInit(): void {
    
  }

  retornarDepartamentos(): Array<String> {

    for (const departamento in DEPARTAMENTOS_Y_MUNICIPIOS) {
      this.departamentos.push(departamento);
    }
    return this.departamentos;
  }

  retornarMunicipios(departamento): Array<String> {
    return DEPARTAMENTOS_Y_MUNICIPIOS[departamento];
  }

  cambioDeDepartamento(departamento){
    console.log(departamento);
    this.municipios = this.retornarMunicipios(departamento);
    console.log(this.municipios);
    
  }

  crearCliente(){
    console.log("Funciona");
    console.log(this.formularioCliente.value);
    
    const cliente: Cliente = {
      dpi: this.formularioCliente.value.dpi,
      primer_nombre: this.formularioCliente.value.primerNombre,
      segundo_nombre: this.formularioCliente.value.segundoNombre,
      primer_apellido: this.formularioCliente.value.primerApellido,
      segundo_apellido: this.formularioCliente.value.segundoApellido,
      departamento: this.formularioCliente.value.departamento,
      municipio: this.formularioCliente.value.municipio,
      direccion: this.formularioCliente.value.direccion,
      indicaciones: this.formularioCliente.value.indicaciones
    };

    this.servicioClientes.crearCliente(cliente).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );

    
  }

}
