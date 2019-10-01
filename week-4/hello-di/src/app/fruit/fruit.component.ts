/*
============================================
; Title: fruit.component.ts
; Author: Reva Baumann
; Date: 29 September 2019
; Modified By: Reva Baumann
; Description: Inversion of Control & Dependency Injection
;===========================================
*/

// Start Program

// Import the components
import { Component, OnInit } from '@angular/core';
import { FruitService } from './fruit.service';
import { Fruit } from './fruit';

// declare the component
@Component({
  selector: 'app-fruit',
  template: `
    <div class="container d-flex flex-column">
      <div class="flex-fill">
        <h2>Fruits</h2>
      </div>
      <div class="flex-fill">
        <table class="table table-hover table-striped">
          <thead class="tbl-header">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let fruit of fruits">
              <td>{{ fruit.id }}</td>
              <td>{{ fruit.name }}</td>
              <td>{{ fruit.color }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,

  // STYLES
  styles: [
    `
    `
  ]
})

export class FruitComponent implements OnInit {
  fruits: Fruit[];
  // Constructor witht injeected services
  constructor(private fruitService: FruitService) {
    this.fruits = this.fruitService.getFruit();
  }
  ngOnInit() {}
}

// end program
