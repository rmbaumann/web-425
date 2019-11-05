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
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InvoiceComponent } from './invoice.component';

// describe the details of the testing modulee and invoicing
describe('InvoiceComponent', () => {
    let component: InvoiceComponent;
    let fixture: ComponentFixture<InvoiceComponent>;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ InvoiceComponent ]
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(InvoiceComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  // End Program 