import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../models/login.model';
import { LoginService } from '../services/login.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private loginService: LoginService,
              private _snackBar: MatSnackBar) { }

  ngOnInit() {

    this.formLogin = this.formBuilder.group({
      usuario: [null, Validators.required],
      senha: [null, Validators.required]
    })
  }

  public login() {
    const user: Login = new Login(
      this.formLogin.value.usuario,
      this.formLogin.value.senha);

    this.loginService.save(user)
      .subscribe(() => {
        console.log(user)
        this.formLogin.reset();
        this.router.navigate(['/admin']);
        this.openSnackBar("usuario logado");
      })
  }

  openSnackBar(message: string, action?: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
