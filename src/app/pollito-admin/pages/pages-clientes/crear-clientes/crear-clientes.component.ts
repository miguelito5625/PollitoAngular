import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DEPARTAMENTOS_Y_MUNICIPIOS } from '../../../../utilidades/guatemala';

@Component({
  selector: 'ngx-crear-clientes',
  templateUrl: './crear-clientes.component.html',
  styleUrls: ['./crear-clientes.component.scss']
})
export class CrearClientesComponent implements OnInit {

  formularioCliente = new FormGroup({
    dpi: new FormControl(''),
    primerNombre: new FormControl(''),
    segundoNombre: new FormControl(''),
    primerApellido: new FormControl(''),
    segundoApellido: new FormControl(''),
    departamento: new FormControl(''),
    municipio: new FormControl(''),
    direccion: new FormControl(''),
    indicaciones: new FormControl(''),
  });

  departamentos: Array<String> = [];
  municipios: Array<String> = [];

  constructor() {
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
    
    
  }

}
