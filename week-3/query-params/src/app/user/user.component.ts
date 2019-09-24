/*
============================================
; Title: app.component.html
; Author: Reva Baumann
; Date: 23 September 2019
; Modified By: Reva Baumann
; Description: Passing Data to Routes
;===========================================
*/

// Start Program

// Import the module
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Declare the Component
@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="row">
      <h2>User: {{ userId }}</h2>
    </div>
  </div>
  `,
  styles: [`
  .container {
    margin-top: 20px;
  }
  `
  ]
})

// Export the Class
export class UserComponent implements OnInit {
  userId: string;
  constructor(route: ActivatedRoute) {
    this.userId = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    
  }
}

// End Program
