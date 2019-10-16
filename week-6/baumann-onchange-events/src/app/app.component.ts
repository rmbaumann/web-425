/* 
============================================
; Title: Assignment 6.4
; Author: Reva Baumann
; Date: 16 October 2019
; Modified By: Reva Baumann
; Description: OnChange() Events
;===========================================
*/

// Start Program

// Import the Module
import { Component } from '@angular/core';

// Declare the Component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Export the class
export class AppComponent {
  title = 'baumann-onchange-events';
  myGreeting = 'Hello World!';
  myUser: {name: string} = {name: 'Reva'};
}
