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
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { InvoiceComponent } from '../invoice/invoice.component';
import { MatListModule } from '@angular/material/list';
import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { NgForm } from '@angular/forms';
import { ticket, invoiceTotal } from './ticket'

// Details of the component
@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css']
  })
  export class OrderComponent {
    services: ticket[] = [];
    totalOrder: invoiceTotal[] = [];

    // Order Details - Srvices
    order = {
        password: { name: '', price: null },
        spyware: { name: '', price: null },
        memory: { name: '', price: null },
        software: { name: '', price: null },
        tuneUp: { name: '', price: null },
        cleanUp: { name: '', price: null },
        keyboard: { name: '', price: null },
        labor: { name: '', price: null },
        parts: { name: '', price: null },
        total: { name: '', price: null }
      };

      onSubmit(formData) {
        
        // Password Reset
        if (formData.serviceRequest.password) {
            this.order.password.price = 39.99;
            this.services.push({service: 'Password Reset', price: 39.99});
        }

        // Spyware Removal
        if (formData.serviceRequest.spyware) {
            this.order.spyware.price = 99.99;
            this.services.push({service: 'Spyware Removal', price: 99.99});
        }

        // Memory Upgrade
        if (formData.serviceRequest.spyware) {
            this.order.memory.price = 99.99;
            this.services.push({service: 'Memory Upgrade', price: 99.99});
        }

        // Software Installation
        if (formData.serviceRequest.software) {
            this.order.software.price = 49.99;
            this.services.push({service: 'Software Installation', price: 49.99});
        }

        // Tune Up
        if (formData.serviceRequest.tuneUp) {
            this.order.tuneUp.price = 89.99;
            this.services.push({service: 'Tune Up', price: 89.99});
        }

        // Disc Clean Up
        if (formData.serviceRequest.cleanUp) {
            this.order.cleanUp.price = 149.99;
            this.services.push({service: 'Disk Cleanup', price: 149.99});
        }

        // Keyboard Clean Up
        if (formData.serviceRequest.keyboard) {
            this.order.keyboard.price = 45.00;
            this.services.push({service: 'Keyboard Cleanup', price: 45.00});
        }

        // Cost of Labor per hour
        if (formData.serviceRequest.labor) {
            const laborAmount = formData.serviceRequest.labor * 50;
            this.order.labor.price = laborAmount;
            this.services.push({service: 'Labor $100/hr', price: this.order.labor.price});
        }

        // Additional Parts
        if (formData.serviceRequest.parts) {
            this.order.parts.price = formData.serviceRequest.parts;
            this.services.push({service: 'Additional Parts', price: this.order.parts.price});
          }
        
        // Invoicing Total, calc
        if (formData.serviceRequest) {
            this.totalOrder.push({sum: 'Total', invoiceTotal:    
              this.order.password.price +
              this.order.spyware.price +
              this.order.memory.price +
              this.order.software.price +
              this.order.tuneUp.price +
              this.order.cleanUp.price +
              this.order.keyboard.price +
              this.order.labor.price +
              this.order.parts.price
            })
          }   

        // Call the services and order total 
        console.log(this.services);
        console.log(this.totalOrder)
      }

      constructor(private dialog: MatDialog) {

      }

      // Invoicing details
      openDialog() {
        const dialogRef = this.dialog.open(InvoiceComponent, {
          data: {
            ticket: this.services,
            invoiceTotal: this.totalOrder
          },
          disableClose: true,
          // width: '800px'
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result === 'confirm') {
                this.services = [];
                this.order = {
                    password: { name: '', price: null },
                    spyware: { name: '', price: null },
                    memory: { name: '', price: null },
                    software: { name: '', price: null },
                    tuneUp: { name: '', price: null },
                    cleanUp: { name: '', price: null },
                    keyboard: { name: '', price: null },
                    labor: { name: '', price: null },
                    parts: { name: '', price: null },
                    total: { name: '', price: null },
                };

                //closed window
                console.log('This window has closed');
            }
        });
    }
  }


// End Program