/*
============================================
; Title: app.component.ts
; Author: Reva Baumann
; Date: 16 September 2019
; Modified By: Reva Baumann
; Description: Two-Way Binding
;===========================================
*/

// Start Program

// Import the Angular Module
import { Component } from '@angular/core';

// Declare the component
@Component({
  selector: 'app-root',

  // Template
  template: `
  <br /><br /><br />

  <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a class="navbar-brand" href="#">Two Way Binding Example</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">View</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">New</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>

  <div class="container-fluid two-way-form">
  <h2>Two-Way Binding Example</h2><br />
  <div class="form-group">
      <input class="form-control" type="text"
            placeholder="Enter your Name..."
            [(ngModel)]="name" #ctrl="ngModel">

      <button class="btn btn-primary form-control" (click)="name=''">Clear Name</button>
    </div>

    <div class="form-group">
        <p class="alert-success">Welcome to two-way binding, {(name)}! </p>
    </div>

  </div>

`,

styles: [`
  h1{
    text-align: center;
  }
  p{
    margin: 10px;
    text-align: center;

  }`]
})

// Export component
export class AppComponent {
  title = 'two-way-binding';
  name:string = 'Reva Baumann'
} 

// End Program