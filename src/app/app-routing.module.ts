import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PatientComponent } from './patient/patient.component';

const routes: Routes = [
{ path: '', redirectTo: '', pathMatch: 'full'},
{ path: 'patient', component: PatientComponent},
{ path: 'patientdetails', component: PatientDetailsComponent},
{ path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
