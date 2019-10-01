/*
============================================
; Title: app.component.ts
; Author: Reva Baumann
; Date: 29 September 2019
; Modified By: Reva Baumann
; Description: Inversion of Control & Dependency Injection
;===========================================
*/

// Start Program

// Importt the Module
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

// Detail the AppComponent
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

  it(`should have as title 'hello-di'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('hello-di');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('hello-di app is running!');
  });
});

// End program