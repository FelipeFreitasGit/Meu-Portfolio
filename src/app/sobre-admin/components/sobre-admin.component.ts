import { Component, OnInit, OnDestroy, ViewChild, ViewChildren } from '@angular/core';
import { SobreService } from '../services/sobre-admin.service';
import { Usuario } from '../models/sobre-admin.model';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { Subject } from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';

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
  public empresaSubject = new Subject<any>();
  public usuarioSubject = new Subject<any>();
  public colunasGridNivel: string[];
  public colunasGridUsario: string[];
  public colunasGridEmpresa: string[];
  panelOpenState = false;
  idEmp: number = 0;
  idSkill: number =0;

  constructor(private sobreService: SobreService,
              private formBuilder: FormBuilder,
              private _snackBar: MatSnackBar) {

    this.colunasGridNivel = ['Nome', 'Nivel'];
    this.colunasGridEmpresa = ['nome', 'cargo', 'inicio', 'fim'];
    this.colunasGridUsario = ['nome', 'cargo', 'editar', 'deletar']
  }

  @ViewChildren('ref') ref;

  ngOnInit() {

    this.listUsuario();

    this.formUser = this.formBuilder.group({
      id: [],
      nome: [null, Validators.required],
      cargo: [null, Validators.required],
      resumo: [null, Validators.required],
      empresa: this.formBuilder.array([]),
      empresa_nome: [null, Validators.required],
      empresa_cargo: [null, Validators.required],
      empresa_inicio: [null, Validators.required],
      empresa_fim: [''],
      empresa_atual: [''],
      empresa_atividades: [null, Validators.required],
      habilidades: this.formBuilder.array([]),
      habilidades_nome: [''],
      habilidades_nivel: [''],
      foto: [],
      curriculo: [],
    })
  }

  public onSubmit() {
    const user: Usuario = new Usuario(
      this.formUser.value.id,
      this.formUser.value.nome,
      this.formUser.value.cargo,
      this.formUser.value.resumo,
      this.formUser.value.empresa,
      this.formUser.value.habilidades,
      this.formUser.value.foto,
      this.formUser.value.curriculo);

    this.sobreService.save(user)
      .subscribe(() => {
        console.log(user)
        this.formUser.reset();
        const addUser = this.listUsuario()
        this.usuarioSubject.next(addUser);
        this.openSnackBar('Usuario cadastro com sucesso!');
      })
    console.warn(this.formUser.value);
  }

  public removeUsuario(user: Usuario) {
    this.sobreService.remove(user)
      .subscribe(() => {
        this.listUsuario();
        this.openSnackBar('Usuário removido com sucerro!')
      })
  }

  public editarUsuario(user: Usuario) {
  //   this.formUser.get('nome').setValue(user.nome);
  //   this.formUser.get('cargo').setValue(user.cargo);
  //   this.formUser.get('resumo').setValue(user.resumo);
  //   this.formUser.get('empresa_nome').setValue('teste');
  //   this.formUser.get('empresa_cargo').setValue('Teste');
  //   this.formUser.get('empresa_inicio').setValue('Teste');
  //   this.formUser.get('empresa_fim').setValue('Teste');
  //   this.formUser.get('habilidades_nome').setValue('Teste');
  //   this.formUser.get('habilidades_nivel').setValue('Teste');
  //   this.formUser.get('foto').setValue('Teste');
  //   this.formUser.get('curriculo').setValue('Teste');
  }

  public listUsuario() {
    this.sobreService.getAll()
    .subscribe((response: Usuario[]) => {
      this.usuario = response;
      this.usuarioSubject.next(response);

      console.log(this.usuario)
    })
  }

  public addSkill() {
    const habilidade = this.formUser.controls.habilidades as FormArray;
    habilidade.push(this.formBuilder.group({
      id: this.idSkill++,
      nome: this.formUser.value.habilidades_nome,
      nivel: this.formUser.value.habilidades_nivel,
    }));
    console.log(habilidade.value)
    this.skillSubject.next(habilidade.value);
  }

  public addEmpresa() {
    const empresa = this.formUser.controls.empresa as FormArray;
    empresa.push(this.formBuilder.group({
      id: this.idEmp++,
      nome: this.formUser.value.empresa_nome,
      cargo: this.formUser.value.empresa_cargo,
      inicio: this.formUser.value.empresa_inicio,
      fim: this.formUser.value.empresa_fim,
      atividades: this.formUser.value.empresa_atividades
    }));
    console.log(empresa.value)
    this.empresaSubject.next(empresa.value);
  }

  openSnackBar(message: string, action?: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  inputFileChangeFoto(event) {
    if (event.target.files && event.target.files[0]) {
      const foto = event.target.files[0];

      this.formUser.value.foto = foto.name;
    }
  }

  inputFileChangeCurriculo(event) {
    if (event.target.files && event.target.files[0]) {
      const curriculo = event.target.files[0];

      this.formUser.value.curriculo = curriculo.name;
    }
  }

  empresaAtual() {
    this.formUser.get('empresa_fim').setValue('à Atual');
  }

  niveis: NivelSkill[] = [
    {nivel: '10'},
    {nivel: '20'},
    {nivel: '30'},
    {nivel: '40'},
    {nivel: '50'},
    {nivel: '60'},
    {nivel: '70'},
    {nivel: '80'},
    {nivel: '90'},
    {nivel: '100'},
  ];
}

export interface NivelSkill {
  nivel: string
}
