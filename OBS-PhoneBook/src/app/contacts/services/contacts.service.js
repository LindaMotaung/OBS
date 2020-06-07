"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var ContactsService = (function () {
    function ContactsService(_http) {
        this._http = _http;
    }
    ContactsService.prototype.getContacts = function () {
        return this._http.get("http://localhost:52897/api/contacts")
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ContactsService.prototype.getContactById = function (Id) {
        return this._http.get("http://localhost:52897/api/contacts/" + Id)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ContactsService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error);
    };
    return ContactsService;
}());
ContactsService = __decorate([
    core_1.Injectable()
], ContactsService);
exports.ContactsService = ContactsService;
