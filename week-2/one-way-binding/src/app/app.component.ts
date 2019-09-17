/*
============================================
; Title: Exercise 2.3
; Author: Reva Baumann
; Date: 16 September 2019
; Modified By: Reva Baumann
; Description: Two-Way Binding
;===========================================
*/
// start program

// Angular Module Import
import { Component } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';


// Declare the component
@Component({
  selector: 'app-root',
  
  template: `
  <h1>{{ name }}</h1>
  <button (click)="changeName()">Change name</button>
  `,

  styles: [`
    h1{
      color: #001283;
    }
  `]
})

export class AppComponent {
  title = 'app';

  // class property
  name: string = "Reva Baumann";

  // switch the name function
  changeName() {
    this.name = "R M Baumann"
  }
}

// end program