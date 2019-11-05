
/*
============================================
; Title: Bob's Computer Repair Shop
; Author: Reva Baumann
; Date: 03 November, 2019
; Modified By: Reva Baumann
; Description: Web 425 Week 9 Project
;===========================================
*/

// Start Program

// Import the Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { OrderComponent } from './order/order.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';


// Declare the Modules
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    OrderComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatListModule
  ], 
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    InvoiceComponent
  ]
})

// Export the Modules
export class AppModule { }

// End Program