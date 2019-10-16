/*
============================================
; Title: Exercise 6.2
; Author: Reva Baumann
; Date: 14 October 2019
; Modified By: Reva Baumann
; Description: Input Properties
;===========================================
*/

// Start Program

// Import the angular modules
import { Component, OnInit, Input } from '@angular/core';
import { NumberFormatStyle } from '@angular/common';

// Declare the Component
@Component({
  selector: 'app-order',
  template: `
    <h4 *ngIf="stockSymbol">Buying {{quantity}} shares of {{stockSymbol}}</h4>
  `,
  styles: [`
  h4{
    color: blue;
  }
  
  `]
})

// Export the class
export class OrderComponent implements OnInit {
  @Input() stockSymbol: string;
  @Input() quantity: number;

  constructor() { }

  ngOnInit() {
  }

}

// End Program