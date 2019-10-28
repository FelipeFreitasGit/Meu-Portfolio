import { Component, OnInit } from '@angular/core';
import { SobreService } from './sobre-admin.service';
import { Usuario, Habilidades } from './sobre-admin.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-sobre-admin',
  templateUrl: './sobre-admin.component.html',
  styleUrls: ['./sobre-admin.component.css'],
  providers: [SobreService]
})
export class SobreAdminComponent implements OnInit {

  public usuario: Usuario[];
  public formUser: FormGroup;
  public habilidades = new Habilidades();
  public skillSubject = new BehaviorSubject([]);
  public listSkill: Array<Habilidades> = new Array<Habilidades>();
  public colunasGridNivel: string[];
  panelOpenState = false;

  constructor(private sobreService: SobreService,
              private formBuilder: FormBuilder) {

    this.colunasGridNivel = ['Nome', 'Nivel'];
  }


  ngOnInit() {
    this.sobreService.getUsuario()
      .subscribe((response: Usuario[]) => {
        this.usuario = response

        console.log(this.usuario)
      })

      this.formUser = this.formBuilder.group({
        id: [],
        nome: [null, Validators.required],
        cargo: [null, Validators.required],
        resumo: [null, Validators.required],
        empresa: this.formBuilder.group({
          nome: [null, Validators.required],
          cargo: [null, Validators.required],
          inicio: [null, Validators.required],
          fim: [null, Validators.required],
        }),
        tarefas: [null, Validators.required],
        habilidades: this.formBuilder.group({
          nome: [''],
          nivel: [''],
        }),
        foto: [],
        curriculo: [],
      })
  }

  public onSubmit() {
    let user: Usuario = new Usuario(
      this.formUser.value.id,
      this.formUser.value.nome,
      this.formUser.value.cargo,
      this.formUser.value.resumo,
      this.formUser.value.empresa,
      this.formUser.value.tarefas,
      this.formUser.value.habilidades,
      this.formUser.value.foto,
      this.formUser.value.curriculo,
    )

    this.sobreService.addUsuario(user)
      .subscribe(() => {
        console.log(user)
        this.formUser.reset();
        this.usuario.push(user)
      })
    console.warn(this.formUser.value);
  }

  public removeUsuario(user: Usuario) {
    this.sobreService.removerUsuario(user)
      .subscribe(() => {

        this.usuario.forEach(x => {
          if(user == x) {
            this.usuario.filter(x => x != x)
            console.log('usuario deletado', x)
          }
        })
        console.log('Usuario Request', user)
      })
  }

  public addSkills() {

    let habilidades = new Habilidades(
      this.formUser.value.habilidades.nome,
      this.formUser.value.habilidades.nivel
    )

    this.listSkill.push(habilidades);
    this.skillSubject.next(this.listSkill);
  }

  niveis: NivelSkill[] = [
    {nivel: '10%'},
    {nivel: '20%'},
    {nivel: '30%'},
    {nivel: '40%'},
    {nivel: '50%'},
    {nivel: '60%'},
    {nivel: '70%'},
    {nivel: '80%'},
    {nivel: '90%'},
    {nivel: '100%'},
  ];
}

export interface NivelSkill {
  nivel: string
}
