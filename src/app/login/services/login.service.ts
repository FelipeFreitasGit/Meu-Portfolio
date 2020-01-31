import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login.model';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {

  API = 'http://localhost:3000/login';

  constructor(private http: HttpClient) {
  }

  save(usuario: Login): Observable<Login> {
    return this.http.post<Login>(this.API, usuario)
  }
}
