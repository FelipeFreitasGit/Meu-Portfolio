import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HomeComponent } from './components/home.component';
import { SobreComponent } from '../sobre/components/sobre.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjetosComponent } from '../projetos/components/projetos.component';
import { ContatoComponent } from '../contato/components/contato.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ArtigosModule } from '../artigos/artigos.module';
import { ContatoModule } from '../contato/contato.module';
import { ProjetosModule } from '../projetos/projetos.module';
import { SobreModule } from '../sobre/sobre.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    ArtigosModule,
    ContatoModule,
    ProjetosModule,
    SobreModule
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomeModule { }
