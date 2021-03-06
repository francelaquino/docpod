import { RouterModule, Routes } from '@angular/router';
import { PatientregistrationComponent } from '../patient/patientregistration/patientregistration.component';
import { PatientsearchComponent } from '../patient/patientsearch/patientsearch.component';
import { PatientupdateComponent } from '../patient/patientupdate/patientupdate.component';
import { CreateorderComponent } from '../patientorder/createorder/createorder.component';
import { PatientorderComponent } from '../patientorder/patientorder/patientorder.component';
import { VieworderComponent } from '../patientorder/vieworder/vieworder.component';
import { Questionaire1Component } from '../patientorder/questionaire1/questionaire1.component';
import { MainorderComponent } from '../patientorder/mainorder/mainorder.component';
import { HealthscoreV1Component } from '../patientorder/healthscore-v1/healthscore-v1.component';

const appRoutes: Routes = [
    { path: 'patient/registration', component: PatientregistrationComponent },
    { path: 'patient/search', component: PatientsearchComponent },
    { path: 'patientorder/createorder', component: CreateorderComponent },
    { path: 'patientorder/patientorder', component: PatientorderComponent },
    { path: 'patientorder/survey1', component: Questionaire1Component },
    { path: 'patientorder/healthscorev1', component: HealthscoreV1Component },
    //{ path: '**', component: NotfoundComponent }, //always last
  ];
  
  export const AppRouting = RouterModule.forRoot(appRoutes, { 
    useHash: false
  });