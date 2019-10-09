/*
============================================
; Title: Exercise 5.4
; Author: Reva Baumann
; Date: 09 October 2019
; Modified By: Reva Baumann
; Description: Flex-Layout
;===========================================
*/

// Start Program

// Import the Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

// Declare the routes
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent}
];

// Declare tthe Module
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// Export the Class
export class AppRoutingModule { }

// End Program