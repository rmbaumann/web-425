/*
============================================
; Title: Exercise 5.3
; Author: Reva Baumann
; Date: 09 October 2019
; Modified By: Reva Baumann
; Description: Material Cards
;===========================================
*/

// Start Program

// Import the Modules
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';


// Details of App Component
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

  it(`should have as title 'baumann-md-login'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('baumann-md-login');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('baumann-md-login app is running!');
  });
});

// End Program