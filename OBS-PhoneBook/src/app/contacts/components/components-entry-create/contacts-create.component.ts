import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker";

@Component({
    selector: 'my-contact-create',
    templateUrl: './contact-create.component.html',
    styleUrls: ['./contact-create.component.css']
})
export class CreateContactComponent implements OnInit {
    @ViewChild("contactsForm") public createContactForm NgForm;

    datePickerColor: Partial<BsDatepickerConfig>;

    constructor() {
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
        console.log(contactsForm);
    }
}