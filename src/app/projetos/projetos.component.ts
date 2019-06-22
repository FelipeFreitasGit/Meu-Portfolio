import { Component, OnInit } from '@angular/core';
import { ProjetosService } from './projetos.service';
import { Projetos } from './projetos.model';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css'],
  providers: [ProjetosService]
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
