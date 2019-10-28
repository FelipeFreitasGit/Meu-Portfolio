import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-senha',
  templateUrl: './senha.component.html',
  styleUrls: ['./senha.component.css']
})
export class SenhaComponent implements OnInit {

  public formSenha: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.formSenha = this.formBuilder.group({
      email: [null]
    })
  }

}
