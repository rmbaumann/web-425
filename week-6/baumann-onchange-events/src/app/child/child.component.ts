/*
============================================
; Title: Assignment 6.4
; Author: Reva Baumann
; Date: 16 October 2019
; Modified By: Reva Baumann
; Description: OnChange() Events
;===========================================
*/

// Import the module
import { Component, OnInit, Input } from '@angular/core';

// Declare the module
@Component({
  selector: 'app-child',
  template: `
    <div class="child">
      <h2>Child</h2>
      <div> Greetings: {{greeting}}</div>
      <div> User: {{user.name}}</div>
    </div>
  `,
  styles: [`
    .child{
      background-color: gray;
    }
  `]
})

// Expor the component
export class ChildComponent implements OnInit {
  @Input() greeting: string;
  @Input() user: {name: string};

  constructor() { }

  ngOnInit() {
  }

}

// End Program
