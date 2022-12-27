import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsListComponent } from './components/contacts-list/contacts-list/contacts-list.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details/contact-details.component';
import { SortByAlphabetPipe } from './pipes/sort-by-alphabet/sort-by-alphabet.pipe';
import {HttpClientModule} from '@angular/common/http';
import {TabsModule} from 'ngx-tabset';
import { ContactPreviewComponent } from './components/contact-preview/contact-preview/contact-preview.component';
import {MatIconModule} from '@angular/material/icon';
import { StoreModule } from '@ngrx/store';
import * as fromApp from './store/app.reducer';
@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    ContactDetailsComponent,
    SortByAlphabetPipe,
    ContactPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    TabsModule,
    StoreModule.forRoot(fromApp.appReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
