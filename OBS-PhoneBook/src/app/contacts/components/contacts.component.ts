import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { IContact } from '../interfaces/contacts.interface';

@Component({
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

    contacts: IContact[];

    constructor(private _contactService: ContactsService) { }

    ngOnInit() {
        this._contactService.getContacts()
            .subscribe(contactData => this.contacts = contactData);
    }
}