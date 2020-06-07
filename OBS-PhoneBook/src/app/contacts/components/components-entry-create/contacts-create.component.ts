import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
//import { BsDatepickerConfig } from "ngx-bootstrap/datepicker";
//import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
    selector: 'my-contact-create',
    templateUrl: './contact-create.component.html',
    styleUrls: ['./contact-create.component.css']
})
export class CreateContactComponent implements OnInit {
    //  datePickerColor: Partial<BsDatepickerConfig>;

    //constructor() {
    //    this.datePickerColor = Object.assign({},
    //        {
    //            containerClass: "theme-dark-blue",
    //            showWeekNumbers: false,
    //            dateInputFormat: "DD/MM/YYYY"
    //        });
    //}

    ngOnInit() {

    }

    saveContacts(contactsForm: NgForm): void {
        // console.log(vehicleForm.value);
        console.log(contactsForm);
    }
}