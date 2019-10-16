/*
============================================
; Title: Exercise 6.3
; Author: Reva Baumann
; Date: 14 October 2019
; Modified By: Reva Baumann
; Description: Output Properties
;===========================================
*/

// Start Program

// Import the component
import { Component } from '@angular/core';
import { PriceQuote } from './price-quote/price-quote';

// Declare the component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Export the component class
export class AppComponent {
  title = 'baumann-output-properties';
  priceQuote: PriceQuote;
  priceQuoteHandler(event: PriceQuote) {
    this.priceQuote = event;
  }
}

// End Program
