import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './contacts/exceptions/PageNotFoundComponent';
import { ContactsComponent } from './contacts/components/contacts.component';
import { ContactsAddressEntryComponent } from './contacts/components/components-entry/contact-entry.component';

const appRoutes: Routes = [
    { path: 'home', component: ContactsComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'contacts/:Id', component: ContactsAddressEntryComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
      AppComponent,
      PageNotFoundComponent,
      ContactsComponent,
      ContactsAddressEntryComponent
  ],
  imports: [
      BrowserModule,
      RouterModule,
      FormsModule,
      HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
