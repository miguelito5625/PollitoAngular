import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private apiServer = environment.backendUrl;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  crearCliente(datos): Observable<Cliente> {
    return this.httpClient.post<Cliente>(this.apiServer + '/clientes', JSON.stringify(datos), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  actualizarCliente(datos): Observable<Cliente> {
    return this.httpClient.put<Cliente>(this.apiServer + '/clientes', JSON.stringify(datos), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  obtenerClientes(): Observable<Cliente> {
    return this.httpClient.get<Cliente>(this.apiServer + '/clientes', this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = error.error;
    }
    // console.log(errorMessage);
    return throwError(errorMessage);
  }

}
