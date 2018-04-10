import { Component, OnInit,Input } from '@angular/core';
import { PatientService} from '../../services/patient.service';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Rx';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { PatientupdateComponent } from '../../patient/patientupdate/patientupdate.component';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-patientsearch',
  templateUrl: './patientsearch.component.html',
  styleUrls: ['./patientsearch.component.css']
})
export class PatientsearchComponent implements OnInit {
  patients:any=[];
  bsModalRef: BsModalRef;
  constructor(public patientService:PatientService,private modalService: BsModalService) { }

  ngOnInit() {
    this.patients=[];
    this.getPatient();
  }

  public openDialog(id:string,gid:string) {
    
    this.bsModalRef = this.modalService.show(PatientupdateComponent, {animated: true, keyboard: true, backdrop: true, ignoreBackdropClick: false,class: 'modal-xl'});
      this.bsModalRef.content.id = id;
      this.bsModalRef.content.gid = gid;
}

  getPatient(){
    
     this.patientService.getPatient().subscribe(response => {
      this.patients=response;
      
     
       
     });
 
   }

}
