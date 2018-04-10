import { Component, OnInit } from '@angular/core';
import { PatientService} from '../../services/patient.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { PatientupdateComponent } from '../../patient/patientupdate/patientupdate.component';
import { VieworderComponent } from '../../patientorder/vieworder/vieworder.component';
@Component({
  selector: 'app-patientorder',
  templateUrl: './patientorder.component.html',
  styleUrls: ['./patientorder.component.css']
})
export class PatientorderComponent implements OnInit {
  patientorders:any=[];
  bsModalRef: BsModalRef;
  constructor(public patientService:PatientService,private modalService: BsModalService) { }

  ngOnInit() {
    this.patientorders=[];
    this.getAllPatientOrders();
  }

  public openDialog(id:string,gid:string) {
    this.bsModalRef = this.modalService.show(PatientupdateComponent, {animated: true, keyboard: true, backdrop: true, ignoreBackdropClick: false,class: 'modal-xl'});
      this.bsModalRef.content.id = id;
      this.bsModalRef.content.gid = gid;
}

public openPatientOrder(id:string,gid:string) {
  this.bsModalRef = this.modalService.show(VieworderComponent, {animated: true, keyboard: true, backdrop: true, ignoreBackdropClick: false,class: 'modal-xl'});
    this.bsModalRef.content.id = id;
    this.bsModalRef.content.gid = gid;
}


  getAllPatientOrders(){
    
     this.patientService.getAllPatientOrders().subscribe(response => {
      this.patientorders=response;
     
       
     });
 
   }

}
