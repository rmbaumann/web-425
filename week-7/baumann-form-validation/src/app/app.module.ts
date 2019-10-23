/*
============================================
; Title: Exercise 7.2
; Author: Reva Baumann
; Date: 19 October 2019
; Modified By: Reva Baumann
; Description: Template-Driven Forms
;===========================================
*/

// Start Program

// Import the Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {
  MatToolbarModule,
  MatMenuModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PhoneValidatorComponent } from './phone-validator/phone-validator.component';
import { AppComponent } from './app.component';


// Declare the Module
@NgModule({
  declarations: [
    AppComponent,
    PhoneValidatorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})

// Export the component
export class AppModule { }
