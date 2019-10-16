/*
============================================
; Title: Exercise 6.2
; Author: Reva Baumann
; Date: 14 October 2019
; Modified By: Reva Baumann
; Description: Input Properties
;===========================================
*/

// Start Program

// Import the Modules
import { Component } from '@angular/core';

// Declare the component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Export the class
export class AppComponent {
  title = 'baumann-input-properties';
  stock: string;
  readonly numberOfShares = 100;

  onChangeEvent({ target }): void {
    this.stock = target.value;
  }
}
// End Program