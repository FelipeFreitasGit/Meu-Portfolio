import { Component, OnInit } from '@angular/core';
import { SobreService } from '../services/sobre-admin.service';
import { Usuario, Habilidades } from '../models/sobre-admin.model';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-sobre-admin',
  templateUrl: './sobre-admin.component.html',
  styleUrls: ['./sobre-admin.component.css'],
  providers: [SobreService]
})
export class SobreAdminComponent implements OnInit {

  public usuario: Usuario[];
  public formUser: FormGroup;
  public skillSubject = new Subject<any>();
  public colunasGridNivel: string[];
  panelOpenState = false;

  constructor(private sobreService: SobreService,
              private formBuilder: FormBuilder) {

    this.colunasGridNivel = ['Nome', 'Nivel'];
  }

  ngOnInit() {

    this.listUsuario();

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
      habilidades: this.formBuilder.array([]),
      nomeHabilidade: [''],
      nivelHabilidade: [''],
      foto: [],
      curriculo: [],
    })
  }

  public onSubmit() {
    const user = this.formUser.value;
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

  public listUsuario() {
    this.sobreService.getUsuario()
    .subscribe((response: Usuario[]) => {
      this.usuario = response

      console.log(this.usuario)
    })
  }

  public addSkill() {
    const habilidade = this.formUser.controls.habilidades as FormArray;
    habilidade.push(this.formBuilder.group({
      nome: this.formUser.value.nomeHabilidade,
      nivel: this.formUser.value.nivelHabilidade,
    }));
    console.log(habilidade.value)
    this.skillSubject.next(habilidade.value);
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
