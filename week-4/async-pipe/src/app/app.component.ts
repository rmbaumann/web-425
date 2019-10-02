/*============================================
; Title: app.component.specs.ts
; Author: Reva Baumann
; Date: 2 October 2019
; Description: Async Pipe
;===========================================
*/


// Start Program

// Import the Modules
import { Component } from '@angular/core';
import { Fruit } from "./fruit";
import { Observable } from 'rxjs';
import { FruitService } from "./fruit.service";


// Declare the component and templates
@Component({
  selector: 'app-root',
  template: `
  <nav class="navbar navbar-expand-sm bg-dark navbar-light">
    <ul class="navbar-nav">
      <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link">About</a></li>
      <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>
    </ul>
  </nav>
    <br /><br />
    <div class="container">
      <table class="table table-hover table-striped table-responsive text-center">
      <thead class="tbl-header thead-light">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let fruit of fruits | async">
          <td>{{ fruit.id }}</td>
          <td>{{ fruit.name }}</td>
          <td>{{ fruit.pricePerPound }}</td>
          <td>{{ fruit.quantity }}</td>
        </tr>
      </tbody>
    </table>
    </div>
  `,
  styleUrls: ['./app.component.css']
})

// Export the component here
export class AppComponent {

  fruits: Observable<Fruit[]>;
  title = 'app';

  constructor(private fruitService: FruitService) {}

  ngOnInit() {
    this.fruits = this.fruitService.getFruits();
  }
}
// end program