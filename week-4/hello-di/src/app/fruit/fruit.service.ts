/*
============================================
; Title: fruit.service.ts
; Author: Reva Baumann
; Date: 29 September 2019
; Modified By: Reva Baumann
; Description: Inversion of Control & Dependency Injection
;===========================================
*/

// Start Program

// Import the Module
import { Injectable } from '@angular/core';
import { Fruit } from './fruit';

// declare the module
@Injectable({
  providedIn: 'root'
})

export class FruitService {
  constructor() {}

  // Create an array to retrieve fruits
  getFruit(): Fruit[] {
    const fruits = [];
    fruits.push(new Fruit(1, 'Orange', 'Orange'));
    fruits.push(new Fruit(2, 'Apple', 'Red'));
    fruits.push(new Fruit(3, 'Banana', 'Yellow'));

// Return the fruits
    return fruits;
  }
}

// end program