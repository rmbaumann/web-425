/*
============================================
; Title: app-routing.module.ts
; Author: Reva Baumann
; Date: 09/24/2019
; Modified By: Reva Baumann
; Description: Guarding Routes
;===========================================
*/

// start program

// Import the Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import { ProductComponent} from "./product/product.component";
import { LoginGuard } from "./login.guard";
import { UnsavedChangesGuard } from "./unsaved-changes.guard";

// Routse ty home, login, etc.
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'product', component: ProductComponent, canActivate:[LoginGuard], canDeactivate: [UnsavedChangesGuard]}
];

// Import the module
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// Export the AppRoutingModule
export class AppRoutingModule { }

// end program
