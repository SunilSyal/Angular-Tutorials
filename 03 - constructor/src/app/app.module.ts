import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClassesComponent } from './classes/classes.component';
import { SchoolComponent } from './school/school.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassesComponent,
    SchoolComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
