import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './contacts/exceptions/pageNotFound.component';
import { ContactsComponent } from './contacts/components/contacts.component';
import { ContactsAddressEntryComponent } from './contacts/components/components-entry/contact-entry.component';
import { CreateContactComponent } from './contacts/components/components-entry-create/contacts-create.component';
import { ContactsService } from './contacts/services/contacts.service';

const appRoutes: Routes = [
    { path: 'home', component: ContactsComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'contacts/:Id', component: ContactsAddressEntryComponent },
    { path: 'create', component: CreateContactComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
      AppComponent,
      ContactsComponent,
      ContactsAddressEntryComponent,
      CreateContactComponent,
      PageNotFoundComponent
  ],
  imports: [
      BrowserModule,
      RouterModule,
      FormsModule,
      HttpModule,
      RouterModule.forRoot(appRoutes)
  ],
  providers: [ContactsService],
  //bootstrap: [ContactsComponent]
  bootstrap: [AppComponent]
})
export class AppModule { }
