import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-admin',
  templateUrl: './sobre-admin.component.html',
  styleUrls: ['./sobre-admin.component.css']
})
export class SobreAdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
