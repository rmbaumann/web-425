/*
============================================
; Title: app-rouing.module.s
; Author: Reva Baumann
; Date: 16 September 2019
; Modified By: Reva Baumann
; Description: Two-Way Binding
;===========================================
*/

// Start Program

// impor tmodule
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// use routes
const routes: Routes = [];

// use NgModule for routes
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// end program