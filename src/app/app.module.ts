import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SplitterModule} from 'primeng/splitter';
import {MegaMenuModule} from 'primeng/megamenu';
import { HomeComponent } from './home/home.component';
import { RestAPIService } from './shared-services/restAPI.service';
import {ButtonModule} from 'primeng/button';
import {HttpClientModule } from '@angular/common/http';
import {PickListModule} from 'primeng/picklist';
import {ListboxModule} from 'primeng/listbox';
import {DataViewModule} from 'primeng/dataview';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    // CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SplitterModule,
    MegaMenuModule,
    ButtonModule,
    HttpClientModule,
    PickListModule,
    ListboxModule,
    DataViewModule,
    DropdownModule,
    DialogModule,
    MessageModule,
    MessagesModule
  ],
  providers: [RestAPIService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
