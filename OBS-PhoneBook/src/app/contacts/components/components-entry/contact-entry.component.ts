import { Component, OnInit } from '@angular/core';
import { IContact } from '../../interfaces/contacts.interface';
import { ContactsService } from '../../services/contacts.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/retrywhen';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/scan';
import { ISubscription } from 'rxjs/Subscription'

@Component({
    selector: 'my-contact',
    templateUrl: './contact-entry.component.html',
    styleUrls: ['./contact-entry.component.css']
})
export class ContactsAddressEntryComponent implements OnInit {
    contact: IContact;
    statusMessage: string = 'Loading data. Please wait...';
    subscription: ISubscription;

    constructor(private _contactsService: ContactsService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router) { }

    ngOnInit() {
        let contactId: number = this._activatedRoute.snapshot.params['Id'];
        this.subscription = this._contactsService.getContactById(contactId)
            .retryWhen((err) => {
                //err.delay(1000)
                return err.scan((retryCount) => {
                    retryCount += 1;
                    if (retryCount < 4) {
                        this.statusMessage = 'Retrying... Attempt # ' + retryCount;
                        return retryCount;
                    }
                    else {
                        throw (err)
                    }
                }, 0).delay(1000)
            }) //Re-subscribe and retry 3 times if there is an error processing the request
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

    onBackButtonClick(): void {
        this._router.navigate(['/contacts']);
    }

    onCancelButtonClick(): void {
        this.statusMessage = "Request Cancelled";
        this.subscription.unsubscribe();
    }
}