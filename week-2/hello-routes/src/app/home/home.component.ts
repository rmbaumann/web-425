/*
============================================
; Title: home.component.ts
; Author: Reva Baumann
; Date: 09/14/2019
; Modified By: Reva Baumann
; Description: Routing in Action
;===========================================
*/

// start program

import { Component, OnInit } from '@angular/core';

// Layout through Component
@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <div class="row">
        <h2>Welcome to the Home Page!</h2>
      </div>
    </div>
  `,
  styles: [
    `
    .container {
      margin-top: 20px;
    }
    h2 {
      color: Red;
    }
    
    `
  ]
})
export class HomeComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
}

// end program