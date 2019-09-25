/*
============================================
; Title: home-component.ts
; Author: Reva Baumann
; Date: 23 September 2019
; Modified By: Reva Baumann
; Description: home-component.ts
;===========================================
*/

// start program

// import the module
import { Component, OnInit } from '@angular/core';

// declare details of the component
@Component({
  selector: 'app-home',
  template: `
    <h2>
      Welcome to the home page!
    </h2>
  `,
  styles: [`
  :host { 
    background: grey;
    margin-top: 20px;
  
  `]
})

// Export the hoome component
export class HomeComponent implements OnInit {
  constructor() {}
  ngOnInit() {
  }

}

// end program
