import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker";
import { Router } from '@angular/router';
import { Contact, CreateContactModel} from '../../model/contacts.model';
import { ContactsService } from '../../services/contacts.service';
import { Message } from 'primeng/components/common/api';

@Component({
    selector: 'my-contact-create',
    templateUrl: './contact-create.component.html',
    styleUrls: ['./contact-create.component.css']
})
export class CreateContactComponent implements OnInit {
    @ViewChild("contactsForm") public createContactForm NgForm;

    emailPattern: string = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";
    datePickerColor: Partial<BsDatepickerConfig>;
    model: CreateContactModel;
    error: Message[];

    constructor(private _router: Router,
        private _contactsService: ContactsService) {
        this.datePickerColor = (<any>Object).assign({},
            {
                containerClass: "theme-dark-blue",
                showWeekNumbers: false,
                dateInputFormat: "YYY/MM/DD"
            });
    }

    ngOnInit() {
        this.model = new CreateContactModel();
    }

    saveContacts(contactsForm: NgForm): void {
        // console.log(contactsForm.value);
        console.log(contactsForm.value);
    }

    backToContactsButtonClick(): void {
        this._router.navigate(['/contacts']);
    }

    saveContactToDB(contactsForm: NgForm): void {
        console.log(contactsForm.value);
        this._contactsService.createContact(this.model).then(
            user => {
                console.log(user);
                this.backToContactsButtonClick();
            },
            error => {
                console.log(error);
                this.error = [];
                this.error.push({ severity: 'error', summary: 'Error', detail: error });
            }
        );
    }
}