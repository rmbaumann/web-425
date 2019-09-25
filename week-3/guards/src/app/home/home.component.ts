/*
============================================
; Title: home.component.ts
; Author: Reva Baumann
; Date: 09/24/2019
; Modified By: Reva Baumann
; Description: Guarding Routes
;===========================================
*/

// start program

// Import the modules
import { Component, OnInit } from '@angular/core';

// Details of the component
@Component({
  selector: 'app-home',
  template: `
    <p>
      Welcome to the Home Page!
    </p>
  `,
  styles: []
})

// Export the class
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

// end program
