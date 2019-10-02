/*============================================
; Title: app.ts
; Author: Reva Baumann
; Date: 2 October 2019
; Description: Async Pipe
;===========================================
*/


// Start Program

// Import the Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

// Export the modules
export class AppModule { }

// end program