/*============================================
; Title: app.component.ts
; Author: Reva Baumann
; Date: 16 September 2019
; Description:  two-way-binding
;===========================================
*/

// start program

// Import Module
import { Component } from '@angular/core';

//Component with inline html/style
@Component({
  selector: 'app-root',

  template: `
  <!--  Navigation Bar and Details -->
  <header>
      <nav class="navbar navbar-expand-md navbar-light fixed-top bg-light">
        <a class="navbar-brand" href="#">Two Way Binding</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">List</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">New</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <div class="container-fluid two-way-form w-50">
      <h2>Two-Way Binding Example</h2><br />
      <div class="form-group">
        <input class="form-control" type="text"

                placeholder="Enter your name ..."
                [(ngModel)]="name" #ctrl="ngModel">
        
        <button class="btn btn-primary form-control" (click)="name=''">Clear Name</button>
      </div>
      <div class="form-group">
        <p class="alert-sucess">Welcome to two-way binding module {{name}} </p>
      </div>
    </div>
  `,

  // Styles
  styles: [`
  p{
    text-align: center;
  }
  .form-control{
    background:blue;
  }`]
    
})

// Export the component
export class AppComponent {
  title = 'two-way-binding';
  name:string = 'Reva Baumann'

}

// end program