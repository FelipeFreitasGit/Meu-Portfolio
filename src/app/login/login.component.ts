import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.formLogin = this.formBuilder.group({
      email: [null],
      senha: [null]
    })
  }

}
