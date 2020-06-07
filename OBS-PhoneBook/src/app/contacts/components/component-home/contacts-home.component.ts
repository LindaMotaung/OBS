import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-contact-create',
    templateUrl: './contacts-home.component.html',
    styleUrls: ['./contacts-home.component.css']
})
export class HomeContactComponent implements OnInit {
    title: string = "Octagon Business Solutions (Pty) Ltd";
    ngOnInit() {

    }
}