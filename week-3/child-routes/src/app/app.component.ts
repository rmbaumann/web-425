/*
============================================
; Title: app.component.ts
; Author: Reva Baumann
; Date: 23 September 2019
; Modified By: Reva Baumann
; Description: app.component.ts
;===========================================
*/
// start program

// Import th moodule
import { Component } from '@angular/core';

// Declare details of the components
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Expoort the class
export class AppComponent {
  title = 'child-routes';
  productId = 1234;
}

// end program