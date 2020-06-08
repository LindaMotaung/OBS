import { Injectable } from '@angular/core'; 
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';
import { IContact } from '../interfaces/contacts.interface';
import { Contact, CreateContactModel } from '../model/contacts.model';


@Injectable()
export class ContactsService {
    constructor(private _http: Http) { }

    //When subscribing to the API, please pass in whatever available port that locall IIS runs the API project in
    getContacts(): Observable<IContact[]> {
        return this._http.get("http://localhost:52897/api/contacts")
            .map((response: Response) => <IContact[]>response.json())
            .catch(this.handleError);
    }

    getContactById(Id: number): Observable<IContact> {
        return this._http.get("http://localhost:52897/api/contacts/" + Id)
            .map((response: Response) => <IContact>response.json())
            .catch(this.handleError);
    }

    createContact(contact: CreateContactModel): Promise<Contact> {
        return this._http.post("http://localhost:52897/api/create", JSON.stringify(contact))
            .toPromise()
            .then(response => response.json() as Contact)
            .catch(this.handleError);
    }

    updateContact(contact: Contact): Promise<Contact> {
        return this._http.post("http://localhost:52897/api/update", JSON.stringify(contact))
            .toPromise()
            .then(response => response.json() as Contact)
            .catch(this.handleError);
    }

    deleteContact(contact: Contact): Promise<Contact> {
        return this._http.post("http://localhost:52897/api/delete", JSON.stringify(contact))
            .toPromise()
            .then(response => response.json() as Contact)
            .catch(this.handleError);
    }

    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error);
    }
}