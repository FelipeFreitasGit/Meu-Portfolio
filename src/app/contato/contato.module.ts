import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoComponent } from './components/contato.component';

@NgModule({
  declarations: [
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    ContatoRoutingModule
  ],
  exports: [
    ContatoComponent
  ],
  providers: []
})
export class ContatoModule { }
