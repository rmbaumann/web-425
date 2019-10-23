/*
============================================
; Title: Exercise 7.2
; Author: Reva Baumann
; Date: 19 October 2019
; Modified By: Reva Baumann
; Description: Template-Driven Forms
;===========================================
*/

// Start Program

// Import thee modules
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

// Declare the component
@Component ({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['/login.component.css']
})

// Export the component class
export class LoginComponent implements OnInit {
    constructor() {}

    ngOnInit() {
    }

    onSubmit(fromData:  NgForm) {
        console.log(formData.value);
    }
}

// End Program