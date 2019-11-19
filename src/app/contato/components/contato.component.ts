import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  public formContact: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.formContact = this.formBuilder.group({
      nome: [null],
      email: [null],
      comment: [null]
    })
  }

}
