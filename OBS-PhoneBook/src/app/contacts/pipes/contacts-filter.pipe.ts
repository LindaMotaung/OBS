import { PipeTransform, Pipe } from '@angular/core'
import { Contact } from '../model/contacts.model'

@Pipe({
    name: 'contactsFilter'
})
export class ContactsFilterPipe implements PipeTransform {
    transform(contacts: Contact[], searchTerm: string) {
        if (!contacts || !searchTerm) {
            return contacts;
        }

        return contacts.filter(contact =>
            contact.FirstName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
            contact.Surname.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
            contact.Tel.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    } 
}