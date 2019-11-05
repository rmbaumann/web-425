/*
============================================
; Title: Bob's Computer Repair Shop
; Author: Reva Baumann
; Date: 03 November, 2019
; Modified By: Reva Baumann
; Description: Web 425 Week 9 Project
;===========================================
*/

// Start Program

// Import the Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order/order.component';

// Routing Details
const routes: Routes = [
  { path: ' ', component: OrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

// End Program