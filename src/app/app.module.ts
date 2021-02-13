import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { AdminComponent } from './admin/admin.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { DocdetailsComponent } from './docdetails/docdetails.component';
import { AdmindetailsComponent } from './admindetails/admindetails.component';
import { ViewpatprofComponent } from './viewpatprof/viewpatprof.component';
import { AdmaddpatComponent } from './admaddpat/admaddpat.component';
import { ViewdocprofComponent } from './viewdocprof/viewdocprof.component';
import { PatchangeComponent } from './patchange/patchange.component';
import { DocchangeComponent } from './docchange/docchange.component';
import { AddocComponent } from './addoc/addoc.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    PatientComponent,
    DoctorComponent,
    AdminComponent,
    PatientDetailsComponent,
    PageNotFoundComponent,
    HomeComponent,
    HeaderComponent,
    DocdetailsComponent,
    AdmindetailsComponent,
    ViewpatprofComponent,
    AdmaddpatComponent,
    ViewdocprofComponent,
    PatchangeComponent,
    DocchangeComponent,
    AddocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
