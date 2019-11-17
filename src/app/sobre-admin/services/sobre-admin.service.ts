import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Usuario } from '../models/sobre-admin.model';

@Injectable()
export class SobreService {

  API = 'http://localhost:3000/usuario'

  constructor(private http: HttpClient) {}

  getAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.API);
  }

  save(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.API, usuario)
      .pipe(
        catchError(this.handleError<Usuario>('addUsuario'))
      )
  }

  remove(user: Usuario): Observable<Usuario> {
    return this.http.delete<Usuario>(`${this.API}/${user.id}`)
      .pipe(
        catchError(this.handleError<Usuario>('removerUsuario'))
      )
  }

  update(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(this.API, usuario)
      .pipe(
        catchError(this.handleError<Usuario>('UpdateUsuario'))
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
