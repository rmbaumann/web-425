/*
============================================
; Title: app-routing.module.ts
; Author: Reva Baumann
; Date: 09/14/2019
; Modified By: Reva Baumann
; Description: Routing in Action
;===========================================
*/
// start program

// Module Imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CommonModule } from '@angular/common';

// routes details
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  
  // end program
