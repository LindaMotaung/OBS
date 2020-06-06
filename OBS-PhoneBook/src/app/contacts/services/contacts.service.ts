import { Injectable } from '@angular/core'; 
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IContact } from '../interfaces/contacts.interface';

@Injectable()
export class ContactsService {
    constructor(private _http: Http) { }

    getContacts(): Observable<IContact[]> {
        return this._http.get("http://localhost:49923/api/contacts")
            .map((response: Response) => <IContact[]>response.json())
    }

    getContactById(Id: number): Observable<IContact> {
        return this._http.get("http://localhost:49923/api/contacts/" + Id)
            .map((response: Response) => <IContact>response.json());
    }
}