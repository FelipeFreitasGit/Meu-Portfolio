import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ProjetosRoutingModule } from './projetos-routing.module';
import { ProjetosComponent } from './components/projetos.component';
import { ProjetosService } from './services/projetos.service';

@NgModule({
  declarations: [
    ProjetosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    ProjetosRoutingModule
  ],
  exports: [
    ProjetosComponent
  ],
  providers: [ProjetosService]
})
export class ProjetosModule { }
