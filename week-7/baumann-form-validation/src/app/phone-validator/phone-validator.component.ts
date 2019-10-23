/*
============================================
; Title: Exercise 7.3
; Author: Reva Baumann
; Date: 19 October 2019
; Modified By: Reva Baumann
; Description: Form Validation
============================================
*/

// Start Program

// Import the Module
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

// Declare the component
@Component({
  selector: 'app-phone-validator',
  templateUrl: './phone-validator.component.html',
  styleUrls: ['./phone-validator.component.css']
})

// Declare and export the componeent
export class PhoneValidatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formData: NgForm) {

    console.log(formData.value);
  }
}

// End Program