/*
============================================
; Title: unsaved-changes.guard.ts
; Author: Reva Baumann
; Date: 09/24/2019
; Modified By: Reva Baumann
; Description: Guarding Routes
;===========================================
*/

// start program

// Import the modules
import { CanDeactivate, Router } from '@angular/router'
import { Injectable } from '@angular/core';
import { ProductComponent } from './product/product.component';

// Injectables to export
@Injectable()
export class UnsavedChangesGuard implements CanDeactivate<ProductComponent> {
    // canDeactivate
    canDeactivate(component: ProductComponent) {
        if (component.name.dirty) {
            return window.confirm("You have unsaved changes. Are you sure you want to leave?");
        } else {
            return true;
        }
    }
}

// end program