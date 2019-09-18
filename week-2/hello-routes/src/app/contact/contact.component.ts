/*
============================================
; Title: contact.component.spec.ts
; Author: Reva Baumann
; Date: 09/14/2019
; Modified By: Reva Baumann
; Description: Routing in Action
;===========================================
*/


// start program

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <div class="container">
      <div class="row">
        <h2>Welcome to the Contact Page!</h2>
      </div>
    </div>
  `,
  styles: [
    `
    .container {
      margin-top: 20px;
    }
    h2 {
      color: Yellow;
    }
    
    `
  ]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}