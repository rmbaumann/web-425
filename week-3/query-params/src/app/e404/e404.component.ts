/*
============================================
; Title: e404.component.ts
; Author: Reva Baumann
; Date: 23 September 2019
; Modified By: Reva Baumann
; Description: Passing Data to Routes
;===========================================
*/

// Start Program

// Import the Modules
import { Component, OnInit } from '@angular/core';

// Declare the component
@Component({
  selector: 'app-e404',
  template: `
    <div class="container">
      <div class="row">
        <h2>Error 404! Page Not Found</h2>
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
  
  `]
})

// Declare and expport the component
export class E404Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

// End Program
