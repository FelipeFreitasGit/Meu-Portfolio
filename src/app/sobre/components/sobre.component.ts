import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/home/services/home.service';
import { SobreService } from 'src/app/sobre-admin/services/sobre-admin.service';
import { Usuario, Empresas } from 'src/app/sobre-admin/models/sobre-admin.model';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  arrow: boolean;
  lado: string;
  empresas = new Array<EmpresasDTO>();
  public usuario: Usuario[];

  constructor(
    private router: Router,
    private homeService: HomeService,
    private sobreService: SobreService) {}

  ngOnInit() {
    this.homeService.currentArrow.subscribe(action => this.arrow = action);

    this.sobreService.getAll().subscribe((resp: Usuario[]) => {
      this.usuario = resp;

      this.usuario.forEach(emp => {
        this.rightOrLeftTimeline(emp.empresas);
      })
    })
  }

  arrowTrue() {
    this.router.navigate(['/sobre']);
    this.homeService.actionArrow(true);
  }

  arrowFalse() {
    this.router.navigate(['/']);
    this.homeService.actionArrow(false);
  }

  rightOrLeftTimeline(empresa: Array<Empresas>) {

    empresa.forEach(raiz => {
      let copy = {
          id : raiz.id,
          nome : raiz.nome,
          cargo : raiz.cargo,
          inicio : raiz.inicio,
          fim : raiz.fim,
          atividades : raiz.atividades,
          lado :  raiz.id / 2 == 1 ? 'right' :  'left'
      }

      this.empresas.push(copy);
    });
  }
}

export class EmpresasDTO {
  public id: number;
  public nome: string;
  public cargo: string;
  public inicio: string;
  public fim: string;
  public atividades: string;
  public lado: string;
}
