/*
============================================
; Title: app.component.html
; Author: Reva Baumann
; Date: 23 September 2019
; Modified By: Reva Baumann
; Description: Passing Data to Routes
;===========================================
*/

// Import the Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { E404Component } from './e404/e404.component';

// Declare the Routes
const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'user/:id', component: UserComponent },
  {path: '**', component: E404Component }
];

// Declare the Module
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// App routing Module 
export class AppRoutingModule { }

// End Program
