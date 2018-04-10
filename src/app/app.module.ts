import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { AppComponent } from './app.component';
import { Http,HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DataService } from './services/data.service'
import { PatientService } from './services/patient.service'
import { Utilities } from './shared/utilities'
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsModalModule } from 'ng2-bs3-modal';
import {DataTableModule,SharedModule,MenubarModule ,MenuModule,GrowlModule,CalendarModule,DialogModule} from 'primeng/primeng';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {MessageService} from 'primeng/components/common/messageservice';
import { PatientregistrationComponent } from './patient/patientregistration/patientregistration.component';
import { PatientsearchComponent } from './patient/patientsearch/patientsearch.component';
import { PatientupdateComponent } from './patient/patientupdate/patientupdate.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { CreateorderComponent } from './patientorder/createorder/createorder.component';
import { PatientorderComponent } from './patientorder/patientorder/patientorder.component';
import { VieworderComponent } from './patientorder/vieworder/vieworder.component';
import { Questionaire1Component } from './patientorder/questionaire1/questionaire1.component';
import { MainorderComponent } from './patientorder/mainorder/mainorder.component';
import { AppRouting } from './shared/approutes';
import { HealthscoreV1Component } from './patientorder/healthscore-v1/healthscore-v1.component';
import { CvdscoreV1Component } from './patientorder/cvdscore-v1/cvdscore-v1.component';
import { DocpodreportV1Component } from './patientorder/docpodreport-v1/docpodreport-v1.component';
import { PrediabeticV1Component } from './patientorder/prediabetic-v1/prediabetic-v1.component';



@NgModule({
  declarations: [
    AppComponent,
    PatientregistrationComponent,
    PatientsearchComponent,
    PatientupdateComponent,
    Questionaire1Component,
    MainmenuComponent,
    CreateorderComponent,
    PatientorderComponent,
    VieworderComponent,
    MainorderComponent,
    HealthscoreV1Component,
    CvdscoreV1Component,
    DocpodreportV1Component,
    PrediabeticV1Component,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    DataTableModule,SharedModule,
    MenuModule,MenubarModule ,AppRouting,CalendarModule,DialogModule,AngularFontAwesomeModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [
    PatientupdateComponent,VieworderComponent,Questionaire1Component,MainorderComponent,CvdscoreV1Component,HealthscoreV1Component,DocpodreportV1Component,PrediabeticV1Component
  ],
  providers: [DataService,PatientService,Utilities,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
