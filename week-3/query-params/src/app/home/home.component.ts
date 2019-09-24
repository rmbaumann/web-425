/*
============================================
; Title:  home.component.ts
; Author: Reva Baumann
; Date: 23 September 2019
; Modified By: Reva Baumann
; Description: Passing Data to Routes
;===========================================
*/

// Start Program

// Import the Module
import { Component, OnInit } from '@angular/core';

// Declare the Component
@Component({
  selector: 'app-home',
  template: `
  <div class="container">
    <div class="row">
      <h2>This is the Home Page</h2>
    </div>
  </div>
`,
  styles: [`
    .container{
      margin: 20px;
    }
    h2 {
      color: blue;
    }

`
]
})

// Declare and Expoprt the home component
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
// End Program
