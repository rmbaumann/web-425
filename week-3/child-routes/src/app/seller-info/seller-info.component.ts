/*
============================================
; Title: seller-info.component.ts
; Author: Reva Baumann
; Date: 23 September 2019
; Modified By: Reva Baumann
; Description: seller-info.component.ts
;===========================================
*/

// Start Program

// Import the modules
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Declare the component details
@Component({
  selector: "app-seller-info",
  template: `
    <p>
      The seller is Diana Prince, id {{ sellerID }
    </p>
  `,
  styles: [ `
    :host { 
      background: grey;
      margin-top: 20px;
    }
    `
  ]
})

// Export the componenet
export class SellerInfoComponent implements OnInit {
  sellerId: string;

  constructor(route: ActivatedRoute) {
    this.sellerId = route.snapshot.paramMap.get("id");
   }

   // Initialize the interfact
  ngOnInit() {}
}

// end program