/*
============================================
; Title: product.component.ts
; Author: Reva Baumann
; Date: 09/24/2019
; Modified By: Reva Baumann
; Description: Guarding Routes
;===========================================
*/

// start program

// Import the MOdules
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

// Component
@Component({
  selector: 'app-product',
  template: `
    <h1>Welcome to the Product Component!</h1>
    <input placeholder="What's your favorite color?" type=text [formControl]="name">
  `,
  styles: [`
    h1 {
      color: red;
    }
  `]
})

// Export the class and execute
export class ProductComponent implements OnInit {

  name: FormControl = new FormControl();

  constructor() { }

  ngOnInit() {
  }

}
// end program