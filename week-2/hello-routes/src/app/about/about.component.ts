/*
============================================
; Title: about.component.ts
; Author: Reva Baumann
; Date: 09/14/2019
; Modified By: Reva Baumann
; Description: Routing in Action
;===========================================
*/

// Importt angular module
import { Component, OnInit } from '@angular/core';

// Declare the component
@Component({
  selector: 'app-about',
  // Inline HTML Template
  template: `
    <div class="container">
      <div class="row justify-content-center">
        <h2>Welcome to the About Page!</h2>
      </div>
    </div>
  `,
  // declare the inline styles
  styles: [`
    .container{
      margin-top: 20px;
    }
    h2{
      color: green;
    }
  `]
})
// Declare component class
export class AboutComponent implements OnInit {

  // Constructor details
  constructor() { }
  ngOnInit() {
  }
}

// end program
