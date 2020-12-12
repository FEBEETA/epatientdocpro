import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { AdminComponent } from './admin/admin.component';
import { IntroComponent } from './intro/intro.component';

const routes: Routes = [
{ path: '', redirectTo: '', pathMatch: 'full'},
{ path: 'intro', component: IntroComponent},
{ path: 'patient', component: PatientComponent},
{ path: 'patientdetails', component: PatientDetailsComponent},
{ path: 'doctor', component: DoctorComponent},
{ path: 'admin', component: AdminComponent},
{ path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
