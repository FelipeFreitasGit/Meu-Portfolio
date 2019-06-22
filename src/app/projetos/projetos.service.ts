import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Projetos } from './projetos.model';

@Injectable()
export class ProjetosService {

  urlRepository = 'https://api.github.com/users/FelipeFreitasGit/repos'

  constructor(private http: HttpClient) {}

  getRepositoriosGit(): Observable<Projetos[]> {
    return this.http.get<Projetos[]>(this.urlRepository);
  }
}
