import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario } from './sobre-admin.model';
import { catchError } from 'rxjs/operators';

@Injectable()
export class SobreService {

  API = 'http://localhost:3000/usuario'

  constructor(private http: HttpClient) {}

  getUsuario(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.API);
  }

  addUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.API, usuario)
      .pipe(
        catchError(this.handleError<Usuario>('addUsuario'))
      )
  }

  removerUsuario(user: Usuario): Observable<Usuario> {
    return this.http.delete<Usuario>(`${this.API}/${user.id}`)
      .pipe(
        catchError(this.handleError<Usuario>('removerUsuario'))
      )
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
