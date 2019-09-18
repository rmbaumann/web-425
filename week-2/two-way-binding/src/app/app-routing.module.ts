/*============================================
; Title: app-routing.module.ts
; Author: Reva Baumann
; Date: 16 September 2019
; Description:  two-way-binding
;===========================================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// end program