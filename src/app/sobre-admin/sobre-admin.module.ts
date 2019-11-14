import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { SobreAdminComponent } from './components/sobre-admin.component';
import { SobreService } from './services/sobre-admin.service';
import { SobreAdminRoutingModule } from './sobre-admin-routing.module';

@NgModule({
  declarations: [
    SobreAdminComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SobreAdminRoutingModule,
    MaterialModule
  ],
  providers: [SobreService]
})
export class SobreAdminModule { }
