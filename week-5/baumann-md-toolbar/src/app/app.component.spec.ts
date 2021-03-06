/*
============================================
; Title: Exercise 5.2
; Author: Reva Baumann
; Date: 09 October 2019
; Modified By: Reva Baumann
; Description: Navigation
;===========================================
*/

// Start Program

// Import thee Modules
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

// Dexcribe the components
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'baumann-md-toolbar'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('baumann-md-toolbar');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('baumann-md-toolbar app is running!');
  });
});

// End Program