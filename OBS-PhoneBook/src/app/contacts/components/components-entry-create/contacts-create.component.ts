import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker";
import { Router } from '@angular/router';

@Component({
    selector: 'my-contact-create',
    templateUrl: './contact-create.component.html',
    styleUrls: ['./contact-create.component.css']
})
export class CreateContactComponent implements OnInit {
    @ViewChild("contactsForm") public createContactForm NgForm;
    emailPattern: string = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";
    datePickerColor: Partial<BsDatepickerConfig>;

    constructor(private _router: Router) {
        this.datePickerColor = (<any>Object).assign({},
            {
                containerClass: "theme-dark-blue",
                showWeekNumbers: false,
                dateInputFormat: "YYY/MM/DD"
            });
    }

    ngOnInit() {

    }

    saveContacts(contactsForm: NgForm): void {
        // console.log(contactsForm.value);
        console.log(contactsForm.value);
    }

    backToContactsButtonClick(): void {
        this._router.navigate(['/contacts']);
    }
}