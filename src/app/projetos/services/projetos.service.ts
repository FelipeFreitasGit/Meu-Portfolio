import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Projetos } from '../models/projetos.model';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class ProjetosService {

  urlRepository: string;

  constructor(private http: HttpClient) {
    this.urlRepository = `${environment.urlRepository}`;
  }

  getRepositoriosGit(): Observable<Projetos[]> {
    return this.http.get<Projetos[]>(this.urlRepository);
  }
}
