/*============================================
; Title: fruit.service.ts
; Author: Reva Baumann
; Date: 2 October 2019
; Description: Async Pipe
;===========================================
*/

// Start Program

// start program
import { Injectable } from '@angular/core';
import {Fruit} from "./fruit";
import {Observable, of} from "rxjs";

// Injectable details
@Injectable({
  providedIn: 'root'
})
// Export class of Fruits
export class FruitService {
  fruits: Fruit[] = [
    {id: 1, name: "Orange", pricePerPound: "$0.50", quantity: 6},
    {id: 2, name: "Apple", pricePerPound: "$0.75", quantity: 12},
    {id: 3, name: "Banana", pricePerPound: "$1.00", quantity: 18},
    {id: 4, name: "Mango", pricePerPound: "$1.25", quantity: 12},
    {id: 5, name: "Kiwi", pricePerPound: "$2.50", quantity: 6}
  ]

  constructor() { }

  getFruits(): Observable<Fruit[]> {
    return of(this.fruits)
  }
}
// End Program