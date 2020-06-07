import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { IContact } from '../interfaces/contacts.interface';
import { Router } from '@angular/router';

@Component({
    selector: 'contacts-root',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

    contacts: IContact[];
    statusMessage: string = 'Loading data. Please wait...';

    constructor(private _contactService: ContactsService,
                private _router: Router) { }

    ngOnInit() {
        this._contactService.getContacts()
            .subscribe(contactData => this.contacts = contactData,
            (error) => {
                this.statusMessage = 'Problem with the API Service. Please try again after a few moments';
            });
    }

    createNewContactButtonClick(): void {
        this._router.navigate(['/create']);
    }
}