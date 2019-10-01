/*
============================================
; Title: app.routing.module.ts
; Author: Reva Baumann
; Date: 29 September 2019
; Modified By: Reva Baumann
; Description: Inversion of Control & Dependency Injection
;===========================================
*/

// Start Program

// import the modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FruitComponent } from './fruit/fruit.component';
import { HomeComponent } from './home/home.component';

// Declare routes
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'fruit', component: FruitComponent}
];

// declare the module
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// declare and export our class
export class AppRoutingModule { }

// End Program