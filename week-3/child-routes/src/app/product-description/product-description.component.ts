/*
============================================
; Title: product-description.component.ts
; Author: Reva Baumann
; Date: 23 September 2019
; Modified By: Reva Baumann
; Description: product-description.component.ts
;===========================================
*/

// import the modulee
import { Component, OnInit } from '@angular/core';


// Details of component
@Component({
  selector: 'app-product-description',
  template: `
    <h2>
      Product Details are found here!
    </h2>
  `,
  styles: [ `
    :host {
      margin-top: 20px;
    }
  `
  ]
})

// Export the module
export class ProductDescriptionComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}

// end program