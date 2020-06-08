import { CanDeactivate } from '@angular/router';
import { CreateContactComponent } from '../components/components-entry-create/contacts-create.component';
import { Injectable } from '@angular/core';

@Injectable()
export class CreateContactactivateService implements CanDeactivate<CreateContactComponent>{

    constructor() { }


    canDeactivate(component: CreateContactComponent): boolean {
    //    if (component.createContactForm.dirty) {
    //        return confirm("Are you sure you want to discard your changes?");
    //    }
    //    else {
    //        return true;
    //    }
    }
}