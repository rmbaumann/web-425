/*
============================================
; Title: login.component.ts
; Author: Reva Baumann
; Date: 09/24/2019
; Modified By: Reva Baumann
; Description: Guarding Routes
;===========================================
*/

// start program

// Import the modules
import { Component, OnInit } from '@angular/core';

// Declare the copmonent
@Component({
  selector: 'app-login',
  template: `
    <h2>Welcome to the Login Page!</h2>
  `,
  styles: []
})

// Export the class
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

// End Program