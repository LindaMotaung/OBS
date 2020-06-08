export class Contact {
    Id: number;
    FirstName: string;
    Surname: string;
    Tel: string;
    Cell: string;
    Email: string;
    UpdateDate: Date;
}

export class CreateContactModel {
    FirstName: string;
    Surname: string;
    Tel: string;
    Cell: string;
    Email: string;
}