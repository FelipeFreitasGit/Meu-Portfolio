import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HomeComponent } from './components/home.component';
import { SobreComponent } from '../sobre/sobre.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjetosComponent } from '../projetos/projetos.component';
import { ArtigosComponent } from '../artigos/artigos.component';
import { ContatoComponent } from '../contato/contato.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

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
    MatProgressBarModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: LOCALE_ID, useValue: 'pt-PT' }
  ]
})
export class HomeModule { }
