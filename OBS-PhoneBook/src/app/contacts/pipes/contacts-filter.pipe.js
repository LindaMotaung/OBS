"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContactsFilterPipe = (function () {
    function ContactsFilterPipe() {
    }
    ContactsFilterPipe.prototype.transform = function (contacts, searchTerm) {
        if (!contacts || !searchTerm) {
            return contacts;
        }
        return contacts.filter(function (contact) {
            return contact.FirstName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
                contact.Surname.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
                contact.Tel.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
        });
    };
    return ContactsFilterPipe;
}());
exports.ContactsFilterPipe = ContactsFilterPipe;
