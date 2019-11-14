import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HomeComponent } from './components/home.component';
import { SobreComponent } from '../sobre/sobre.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjetosComponent } from '../projetos/projetos.component';
import { ArtigosComponent } from '../artigos/artigos.component';
import { ContatoComponent } from '../contato/contato.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    HomeComponent,
    SobreComponent,
    ProjetosComponent,
    ArtigosComponent,
    ContatoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: []
})
export class HomeModule { }
