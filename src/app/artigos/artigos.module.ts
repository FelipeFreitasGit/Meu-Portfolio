import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ArtigosComponent } from './components/artigos.component';
import { ArtigosRoutingModule } from './artigos-routing.module';

@NgModule({
  declarations: [
    ArtigosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    ArtigosRoutingModule
  ],
  exports: [
    ArtigosComponent
  ],
  providers: []
})
export class ArtigosModule { }
