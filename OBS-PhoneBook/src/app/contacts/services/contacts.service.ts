import { Injectable } from '@angular/core'; 
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';
import { IContact } from '../interfaces/contacts.interface';

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

    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error);
    }
}