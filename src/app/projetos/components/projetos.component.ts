import { Component, OnInit } from '@angular/core';
import { ProjetosService } from '../services/projetos.service';
import { Projetos } from '../models/projetos.model';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {

  projetos: Array<Projetos>

  constructor(private projetosService: ProjetosService) { }

  ngOnInit() {
    this.projetosService.getRepositoriosGit()
      .subscribe( (response: Projetos[]) => {
        this.projetos = response

        console.log(this.projetos)
      })
  }

}
