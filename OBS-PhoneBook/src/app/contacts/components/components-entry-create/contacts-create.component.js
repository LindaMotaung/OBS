"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var contacts_model_1 = require("../../model/contacts.model");
var CreateContactComponent = (function () {
    function CreateContactComponent(_router, _contactsService) {
        this._router = _router;
        this._contactsService = _contactsService;
        this.createContactForm = forms_1.NgForm;
        this.emailPattern = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";
        this.datePickerColor = Object.assign({}, {
            containerClass: "theme-dark-blue",
            showWeekNumbers: false,
            dateInputFormat: "YYY/MM/DD"
        });
    }
    CreateContactComponent.prototype.ngOnInit = function () {
        this.model = new contacts_model_1.CreateContactModel();
    };
    CreateContactComponent.prototype.saveContacts = function (contactsForm) {
        // console.log(contactsForm.value);
        console.log(contactsForm.value);
    };
    CreateContactComponent.prototype.backToContactsButtonClick = function () {
        this._router.navigate(['/contacts']);
    };
    CreateContactComponent.prototype.saveContactToDB = function (contactsForm) {
        var _this = this;
        console.log(contactsForm.value);
        this._contactsService.createContact(this.model).then(function (user) {
            console.log(user);
            _this.backToContactsButtonClick();
        }, function (error) {
            console.log(error);
            _this.error = [];
            _this.error.push({ severity: 'error', summary: 'Error', detail: error });
        });
    };
    return CreateContactComponent;
}());
__decorate([
    core_1.ViewChild("contactsForm")
], CreateContactComponent.prototype, "createContactForm", void 0);
CreateContactComponent = __decorate([
    core_1.Component({
        selector: 'my-contact-create',
        templateUrl: './contact-create.component.html',
        styleUrls: ['./contact-create.component.css']
    })
], CreateContactComponent);
exports.CreateContactComponent = CreateContactComponent;
