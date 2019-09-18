/*
============================================
; Title: app.module.ts
; Author: Reva Baumann
; Date: 16 September 2019
; Modified By: Reva Baumann
; Description: Two-Way Binding
;===========================================
*/

// start program

// Import the Angular Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Declare the Module Detail
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// End Program
