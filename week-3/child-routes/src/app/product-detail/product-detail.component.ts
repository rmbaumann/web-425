/*
============================================
; Title: product-detail.component.ts
; Author: Reva Baumann
; Date: 23 September 2019
; Modified By: Reva Baumann
; Description: app.component.ts
;===========================================
*/

// start program

// Import the modulees
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Details of the component
@Component({
  // Templatee 
  template: `
  <div class="container">
    <h2>Product Detail for Product: {{productId}}</h2>
    <router-outlet></router-outlet>
    <p><a [routerLink]="['./seller', sellerId]">Seller Details</a></p>
  </div>
  `,

  // Styles
  styles: [ `
  .container {
    background-color: grey;
    margin-top: 20px;
  }

  `
]
})

// Export Class
export class ProductDetailComponent implements OnInit {
  productId: string;
  sellerId: 5678;

  // Product id property and constructor details
  constructor(route: ActivatedRoute) {
    this.productId = route.snapshot.paramMap.get('id');
   }

   // Method for ngOnInit Intrface
  ngOnInit() {}

}

// end program