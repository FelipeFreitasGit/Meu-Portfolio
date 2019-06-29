import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule,
         MatProgressSpinnerModule } from '@angular/material';
import { ProjetosComponent } from './projetos/projetos.component';

import { HttpClientModule } from '@angular/common/http';
import { ProjetosService } from './projetos/projetos.service';
import { ArtigosComponent } from './artigos/artigos.component';
import { ContatoComponent } from './contato/contato.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent,
    ProjetosComponent,
    ArtigosComponent,
    ContatoComponent,
    AdminComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatInputModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-PT' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
