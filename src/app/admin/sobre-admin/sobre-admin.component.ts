import { Component, OnInit } from '@angular/core';
import { SobreService } from './sobre-admin.service';
import { Usuario } from './sobre-admin.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sobre-admin',
  templateUrl: './sobre-admin.component.html',
  styleUrls: ['./sobre-admin.component.css'],
  providers: [SobreService]
})
export class SobreAdminComponent implements OnInit {

  usuario: Usuario[]
  public idUsuario: number
  formUser: FormGroup

  constructor(private sobreService: SobreService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.sobreService.getUsuario()
      .subscribe((response: Usuario[]) => {
        this.usuario = response

        console.log(this.usuario)
      })

      this.formUser = this.formBuilder.group({
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
          nome: [null, Validators.required],
          nivel: [null, Validators.required],
        }),
        foto: [],
        curriculo: [],
      })
  }



  onSubmit() {
    let user: Usuario = new Usuario(
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
      .subscribe((idUser: any) => {
        this.idUsuario = idUser
      })
    console.warn(this.formUser.value);
  }

  skills: Habilidades[] = [
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

export interface Habilidades {
  nivel: string
}
