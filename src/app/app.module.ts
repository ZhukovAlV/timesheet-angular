import { HttpClientModule, HttpClient } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { SystemModule } from './system/system.module';
import { TimedataListComponent } from './timedata/timedata-list/timedata-list.component';
import { OrgdataListComponent } from './orgdata/orgdata-list/orgdata-list.component';

@NgModule({
  declarations: [
    AppComponent, 
    UserListComponent, TimedataListComponent, OrgdataListComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SystemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
