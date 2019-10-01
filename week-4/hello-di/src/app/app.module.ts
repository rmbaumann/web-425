/*
============================================
; Title: app.module.ts
; Author: Reva Baumann
; Date: 29 September 2019
; Modified By: Reva Baumann
; Description: Inversion of Control & Dependency Injection
;===========================================
*/

// Start Program

// Import the Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FruitComponent } from './fruit/fruit.component';
import { FruitService } from './fruit/fruit.service';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './home/home.component'

// Declare the modulees
@NgModule({
  declarations: [
    AppComponent,
    FruitComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FruitService],
  bootstrap: [AppComponent]
})

// Export the module
export class AppModule { }

// End Program