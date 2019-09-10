/*
============================================
; Title: Assignment 1.5
; Author: Reva Baumann
; Date: 09 Sept 2019
; Modified By: Reva Baumann
; Description: Hello Modules
;===========================================
*/

// Start Program 

// Import the testing and shipping modules
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShippingComponent } from './shipping.component';

// Create a collection of tests
describe('ShippingComponent', () => {
  let component: ShippingComponent;
  let fixture: ComponentFixture<ShippingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Test the actual component
  it('shoudl create', () => {
    expect(component).toBeTruthy();
  });
});

// End Program