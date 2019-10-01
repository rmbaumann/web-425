/*
============================================
; Title: home.component.ts
; Author: Reva Baumann
; Date: 29 September 2019
; Modified By: Reva Baumann
; Description: Inversion of Control & Dependency Injection
;===========================================
*/

// Start Program


import { Component, OnInit } from '@angular/core';

// declare the component
@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <h2>Welcome to the Home Page!</h2>
    </div>
  `,
  // STYLES
  styles: [
    `
    h2{
      color: red;
    }
    `
  ]
})

// Export the class
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

// End program