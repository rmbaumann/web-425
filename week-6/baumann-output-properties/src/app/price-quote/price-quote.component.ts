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

// Import the Modules
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { interval } from 'rxjs';

// Import the component
@Component({
  selector: 'app-price-quote',

  template: `
    <strong>
      Inside PriceQuoteComponent
      {{ priceQuote.stockSymbol }}
      {{ priceQuote.lastPrice | currency: 'USD' }}
    </strong>
  `,
  styles: [`
    :host { background-color: grey }
  
  `]
})

// Export the component class
export class PriceQuoteComponent implements OnInit {
  @Output() lastPrice = new EventEmitter<PriceQuote>();

  priceQuote: PriceQuote;

  // Declare the class constructor
  constructor() {
    interval(2000)
      .subscribe(data => {
        this.priceQuote = {
          stockSymbol: 'PYPL',
          lastPrice: 100 * Math.random()
      };

      this.lastPrice.emit(this.priceQuote);
    });
   }

  ngOnInit() {
  }

}

// End Program
