/*
============================================
; Title: login.guard.ts
; Author: Reva Baumann
; Date: 09/24/2019
; Modified By: Reva Baumann
; Description: Guarding Routes
;===========================================
*/

// start program

// Import the Modules
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

// Declare the injectable
@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate() {
    const loggedIn = Math.random() < 0.5;

    // False - Rerouting
    if (!loggedIn) {
      alert('You are not logged in and will be redirected to the login page!');
      this.router.navigate(['/login']);
    }

    return loggedIn;
  }
}

// end program
