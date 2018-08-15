import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; // Added here

import { AppComponent } from './app.component';
import { ClassesComponent } from './classes/classes.component';
import { SchoolComponent } from './school/school.component';
import { OfficeComponent } from './office/office.component';
import { PrimaryComponent } from './primary/primary.component';
import { MiddleSchoolComponent } from './middle-school/middle-school.component';

import { TotalBetterStaffService } from "../services/betterStaff/betterStaff.service";

@NgModule({
  declarations: [
    AppComponent,
    ClassesComponent,
    SchoolComponent,
    OfficeComponent,
    PrimaryComponent,
    MiddleSchoolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    TotalBetterStaffService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
