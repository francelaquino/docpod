import { Component, OnInit } from '@angular/core';
import { PatientService} from '../../services/patient.service';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-docpodreport-v1',
  templateUrl: './docpodreport-v1.component.html',
  styleUrls: ['./docpodreport-v1.component.css']
})
export class DocpodreportV1Component implements OnInit {

  healthscore:any=[];
  public medicalno:string;
  public visitno:string;
  constructor(public bsModalRef: BsModalRef,private patientService:PatientService) { }

  ngOnInit() {
    setTimeout(() => {
      this.patientService.getDocPodReport_v1(this.medicalno,this.visitno).subscribe(response => {
        this.healthscore=response;
       });
      
    }, 0);
    
    
  }

}
