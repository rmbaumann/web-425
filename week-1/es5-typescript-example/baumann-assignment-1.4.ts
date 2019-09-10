/*
============================================
; Title: Assignment 1.4
; Author: Reva Baumann
; Date: 09 Sept 2019
; Modified By: Reva Baumann
; Description: Typescript Example
;===========================================
*/

/* Expected Output:
Hello Reva Baumann
*/

// Start Program

// Create a string of values and assign
let firstName: string = 'Reva';
let lastName: string = 'Baumann';

// Declare functiton and return string details
function myName(firstName: string, lastName: string): string {
    return 'Hello ' + firstName + ' ' + lastName;
}

// Output
console.log(myName(firstName, lastName));

// End Program