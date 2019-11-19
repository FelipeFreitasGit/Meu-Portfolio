import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { SobreRoutingModule } from './sobre-routing.module';
import { SobreComponent } from './components/sobre.component';

@NgModule({
  declarations: [
    SobreComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    SobreRoutingModule
  ],
  exports: [
    SobreComponent
  ],
  providers: []
})
export class SobreModule { }
