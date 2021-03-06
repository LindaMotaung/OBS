"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ContactsComponent = (function () {
    function ContactsComponent(_contactService, _router) {
        this._contactService = _contactService;
        this._router = _router;
        this.statusMessage = 'Loading data. Please wait...';
    }
    ContactsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._contactService.getContacts()
            .subscribe(function (contactData) { return _this.contacts = contactData; }, function (error) {
            _this.statusMessage = 'Problem with the API Service. Please try again after a few moments';
        });
    };
    ContactsComponent.prototype.createNewContactButtonClick = function () {
        this._router.navigate(['/create']);
    };
    return ContactsComponent;
}());
ContactsComponent = __decorate([
    core_1.Component({
        selector: 'contacts-root',
        templateUrl: './contacts.component.html',
        styleUrls: ['./contacts.component.css']
    })
], ContactsComponent);
exports.ContactsComponent = ContactsComponent;
