"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ContactsAddressEntryComponent = (function () {
    function ContactsAddressEntryComponent(_contactsService, _activatedRoute) {
        this._contactsService = _contactsService;
        this._activatedRoute = _activatedRoute;
        this.statusMessage = 'Loading data. Please wait...';
    }
    ContactsAddressEntryComponent.prototype.ngOnInit = function () {
        var _this = this;
        var contactId = this._activatedRoute.snapshot.params['Id'];
        this._contactsService.getContactById(contactId)
            .subscribe(function (contactData) {
            if (contactData == null) {
                _this.statusMessage =
                    'Contact with the specified Contact ID does not exist';
            }
            else {
                _this.contact = contactData;
            }
        }, function (error) {
            _this.statusMessage =
                'Problem with the service. Please try again after sometime';
            console.error(error);
        });
    };
    return ContactsAddressEntryComponent;
}());
ContactsAddressEntryComponent = __decorate([
    core_1.Component({
        selector: 'my-contact',
        templateUrl: './contact-entry.component.html',
        styleUrls: ['./contact-entry.component.css']
    })
], ContactsAddressEntryComponent);
exports.ContactsAddressEntryComponent = ContactsAddressEntryComponent;
