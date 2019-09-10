/*
============================================
; Title: Assignment 1.5
; Author: Reva Baumann
; Date: 09 Sept 2019
; Modified By: Reva Baumann
; Description: Hello Modules
;===========================================
*/

// Start Program

// Declare details of component, define
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping',
  template: `
    <p>Welcome to the Shipping Component and Specs!</p>
  `,
  styles: []
})

// Export the component class
export class ShippingComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
}

// end program