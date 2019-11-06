/*
============================================
; Title: Bob's Computer Repair Shop
; Author: Reva Baumann
; Date: 03 November, 2019
; Modified By: Reva Baumann
; Description: Web 425 Week 9 Project
;===========================================
*/

// Start Program

// Import the modules
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, OnInit, Input, Inject } from '@angular/core';

// Component Deetails
@Component({
    selector: 'app-invoice',
    templateUrl: './invoice.component.html',
    styleUrls: ['./invoice.component.css']
  })
  export class InvoiceComponent implements OnInit {
    services: [];
    today: number = Date.now();
    
    constructor(private dialogRef: MatDialogRef<InvoiceComponent>, @Inject(MAT_DIALOG_DATA) data) {
        this.services = data.ticket;
    }
  
    ngOnInit() {
    }
  }

  // End Program