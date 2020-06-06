"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var ContactsService = (function () {
    function ContactsService(_http) {
        this._http = _http;
    }
    ContactsService.prototype.getContacts = function () {
        return this._http.get("http://localhost:49923/api/contacts")
            .map(function (response) { return response.json(); });
    };
    ContactsService.prototype.getContactById = function (Id) {
        return this._http.get("http://localhost:49923/api/contacts/" + Id)
            .map(function (response) { return response.json(); });
    };
    return ContactsService;
}());
ContactsService = __decorate([
    core_1.Injectable()
], ContactsService);
exports.ContactsService = ContactsService;
