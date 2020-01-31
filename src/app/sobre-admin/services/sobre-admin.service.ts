import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Usuario } from '../models/sobre-admin.model';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class SobreService {

  urlProduction: string;

  constructor(private http: HttpClient) {
    this.urlProduction = `${environment.urlProduction}/usuario`;
  }

  getAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.urlProduction);
  }

  save(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.urlProduction, usuario)
      .pipe(
        catchError(this.handleError<Usuario>('addUsuario'))
      )
  }

  remove(user: Usuario): Observable<Usuario> {
    return this.http.delete<Usuario>(`${this.urlProduction}/${user.id}`)
      .pipe(
        catchError(this.handleError<Usuario>('removerUsuario'))
      )
  }

  update(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(this.urlProduction, usuario)
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
