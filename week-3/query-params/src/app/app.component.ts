/*
============================================
; Title: app.component.ts
; Author: Reva Baumann
; Date: 23 September 2019
; Modified By: Reva Baumann
; Description: Passing Data to Routes
;===========================================
*/

// Start Program

// Import the Module
import { Component } from '@angular/core';

// Declare the component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Export the App Component
export class AppComponent {
  title = 'query-params';
  userId = 1098;
}

// End Program
