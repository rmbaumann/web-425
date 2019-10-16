/*
============================================
; Title: Exercise 6.2
; Author: Reva Baumann
; Date: 14 October 2019
; Modified By: Reva Baumann
; Description: Input Properties
;===========================================
*/

// Import the Moduls
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatToolbarModule,
  MatMenuModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
} from '@angular/material';


// Declare the app component
@NgModule({
  declarations: [
    AppComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    FlexLayoutModule
  ],
  exports: [MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule],
  providers: [],
  bootstrap: [AppComponent]
})

// Export the modulee
export class AppModule { }

// End Program