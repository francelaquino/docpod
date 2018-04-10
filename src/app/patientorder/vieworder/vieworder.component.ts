import { Component, OnInit ,ViewChild} from '@angular/core';
import {  FormGroup,  FormBuilder,  FormControl,  Validators } from '@angular/forms';
import {  PatientService} from '../../services/patient.service';
import {  DataService} from '../../services/data.service';
import { Utilities } from '../../shared/utilities';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-vieworder',
  templateUrl: './vieworder.component.html',
  styleUrls: ['./vieworder.component.css']
})
export class VieworderComponent implements OnInit {
  @ViewChild(ModalDirective) public modal: ModalDirective;
  constructor(public bsModalRef: BsModalRef,public utility:Utilities,public dataService: DataService, private fb: FormBuilder, public patientService: PatientService) { }

  ngOnInit() {
  }

}
