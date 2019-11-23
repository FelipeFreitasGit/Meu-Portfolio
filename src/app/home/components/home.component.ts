import { Component, OnInit } from '@angular/core';
import { SobreService } from 'src/app/sobre-admin/services/sobre-admin.service';
import { Usuario } from 'src/app/sobre-admin/models/sobre-admin.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public usuario: Usuario[];

  constructor(private sobreService: SobreService) { }

  ngOnInit() {

    this.sobreService.getAll().subscribe((resp: Usuario[]) => {
      this.usuario = resp;
    })
  }
}
