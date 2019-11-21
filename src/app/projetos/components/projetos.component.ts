import { Component, OnInit } from '@angular/core';
import { ProjetosService } from '../services/projetos.service';
import { Projetos } from '../models/projetos.model';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/home/services/home.service';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {

  projetos: Array<Projetos>;
  arrow: boolean;

  constructor(
    private projetosService: ProjetosService,
    private router: Router,
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.projetosService.getRepositoriosGit()
      .subscribe( (response: Projetos[]) => {
        this.projetos = response

        console.log(this.projetos)
      })

    this.homeService.currentArrow.subscribe(action => this.arrow = action);
  }

  arrowTrue() {
    this.router.navigate(['/projetos']);
    this.homeService.actionArrow(true);
  }

  arrowFalse() {
    this.router.navigate(['/']);
    this.homeService.actionArrow(false);
  }

}
