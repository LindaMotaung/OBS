"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var pageNotFound_component_1 = require("./contacts/exceptions/pageNotFound.component");
var contacts_component_1 = require("./contacts/components/contacts.component");
var contact_entry_component_1 = require("./contacts/components/components-entry/contact-entry.component");
var contacts_create_component_1 = require("./contacts/components/components-entry-create/contacts-create.component");
var contacts_service_1 = require("./contacts/services/contacts.service");
var appRoutes = [
    { path: 'home', component: contacts_component_1.ContactsComponent },
    { path: 'contacts', component: contacts_component_1.ContactsComponent },
    { path: 'contacts/:Id', component: contact_entry_component_1.ContactsAddressEntryComponent },
    { path: 'create', component: contacts_create_component_1.CreateContactComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: pageNotFound_component_1.PageNotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            contacts_component_1.ContactsComponent,
            contact_entry_component_1.ContactsAddressEntryComponent,
            contacts_create_component_1.CreateContactComponent,
            pageNotFound_component_1.PageNotFoundComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot(appRoutes)
        ],
        providers: [contacts_service_1.ContactsService],
        //bootstrap: [ContactsComponent]
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
