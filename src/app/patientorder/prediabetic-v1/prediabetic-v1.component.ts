import { Component, OnInit } from '@angular/core';
import { PatientService} from '../../services/patient.service';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-prediabetic-v1',
  templateUrl: './prediabetic-v1.component.html',
  styleUrls: ['./prediabetic-v1.component.css']
})
export class PrediabeticV1Component implements OnInit {

  prediabetic:any=[];
  public medicalno:string;
  public visitno:string;
  constructor(public bsModalRef: BsModalRef,private patientService:PatientService) { }

  ngOnInit() {
    setTimeout(() => {
      this.patientService.getPrediabeticScore_v1(this.medicalno,this.visitno).subscribe(response => {
        this.prediabetic=response;
        console.log(this.prediabetic);
       });
      
    }, 0);
    
    
  }

}
