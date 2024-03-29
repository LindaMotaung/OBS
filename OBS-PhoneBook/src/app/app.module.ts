import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './contacts/exceptions/pageNotFound.component';
import { HomeContactComponent } from './contacts/components/component-home/contacts-home.component';
import { ContactsComponent } from './contacts/components/contacts.component';
import { ContactsAddressEntryComponent } from './contacts/components/components-entry/contact-entry.component';
import { CreateContactComponent } from './contacts/components/components-entry-create/contacts-create.component';
import { ContactsService } from './contacts/services/contacts.service';
import { ContactsFilterPipe } from './contacts/pipes/contacts-filter.pipe';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CreateContactactivateService } from './contacts/services/create-contact-can-deactivate-guard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
    { path: 'home', component: HomeContactComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'contacts/:Id', component: ContactsAddressEntryComponent },
    //{ path: 'create', component: CreateContactComponent, canDeactivate: [CreateContactactivateService] },
    { path: 'create', component: CreateContactComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
      AppComponent,
      HomeContactComponent,
      ContactsComponent,
      ContactsAddressEntryComponent,
      CreateContactComponent,
      ContactsFilterPipe,
      PageNotFoundComponent
  ],
  imports: [
      BrowserModule,
      RouterModule,
      FormsModule,
      HttpModule,
      BrowserAnimationsModule,
      BsDatepickerModule.forRoot(),
      RouterModule.forRoot(appRoutes)
  ],
  providers: [CreateContactactivateService, ContactsService],
  //bootstrap: [ContactsComponent]
  bootstrap: [AppComponent]
})
export class AppModule { }
