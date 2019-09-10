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

// Import module details
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingComponent } from './shipping.component';


// Shipping module details
@NgModule({
  declarations: [ShippingComponent],
  imports: [
    CommonModule
  ],
  exports: [ShippingComponent]
})
export class ShippingModule { }

// end program
