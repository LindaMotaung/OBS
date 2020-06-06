import { Component, OnInit } from '@angular/core';
import { IContact } from '../../interfaces/contacts.interface';
import { ContactsService } from '../../services/contacts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'my-contact',
    templateUrl: './contact-entry.component.html',
    styleUrls: ['./contact-entry.component.scss']
})
export class ContactsAddressEntryComponent implements OnInit {
    contact: IContact;
    statusMessage: string = 'Loading data. Please wait...';

    constructor(private _contactsService: ContactsService,
        private _activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        let contactId: number = this._activatedRoute.snapshot.params['Id'];
        this._contactsService.getContactById(contactId)
            .subscribe((contactData) => {
                if (contactData == null) {
                    this.statusMessage =
                        'Contact with the specified Contact ID does not exist';
                }
                else {
                    this.contact = contactData;
                }
            },
            (error) => {
                this.statusMessage =
                    'Problem with the service. Please try again after sometime';
                console.error(error);
            });
    }
}