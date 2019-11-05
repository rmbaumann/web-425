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

// Import the module
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavBarComponent } from './nav-bar.component';

// Details of the NavBar
describe('NavBarComponent', () => {
    let component: NavBarComponent;
    let fixture: ComponentFixture<NavBarComponent>;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ NavBarComponent ]
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(NavBarComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  // End Program