import {
  Injectable
} from '@angular/core';
import {
  Http,
  RequestOptions,
  RequestMethod,
  Headers
} from '@angular/http';
import 'rxjs/add/operator/map';
import {
  Observable
} from 'rxjs';


@Injectable()
export class PatientService {
  http: any;
  baseUrl: String;
  headers: Headers;
  options: RequestOptions;


  constructor(http: Http) {


    this.http = http;
    this.baseUrl="http://localhost:8080/api.docpod/index.php/api";  
    //this.baseUrl="http://precisionmedicalhealth.com/docpodapi/index.php/api";  
    //this.baseUrl="http://uniserb.com/docpodapi/index.php/api";  
    
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    });
    let options = new RequestOptions({
      headers: this.headers
    });


  }

  savePatientRegistration(data: any) {

    return this.http.post(this.baseUrl + '/' + 'patient/savepatientregistration', data, this.options)
      .map((res) => res.json());

  }

  createPatientVisit(data: any) {

    return this.http.post(this.baseUrl + '/' + 'visit/createpatientvisit', data, this.options)
      .map((res) => res.json());

  }

  updatePatientInformation(data: any) {

    return this.http.post(this.baseUrl + '/' + 'patient/updatepatientregistration', data, this.options)
      .map((res) => res.json());

  }

  getPatient() {
    return this.http.get(this.baseUrl + '/' + 'patient/getpatient')
      .map((res) => res.json());
  }

  getPatientDetails(id: string, gid: string) {
    return this.http.get(this.baseUrl + '/' + 'patient/getpatientdetails/' + id + '/' + gid)
      .map((res) => res.json());
  }

  getPatientDetailsMedicalNo(id: string) {
    return this.http.get(this.baseUrl + '/' + 'patient/getpatientdetails_view/' + id)
      .map((res) => res.json());
  }

  getPatientOrders(id: string) {
    return this.http.get(this.baseUrl + '/' + 'visit/getpatientvisits/' + id)
      .map((res) => res.json());
  }

  getAllPatientOrders() {
    return this.http.get(this.baseUrl + '/' + 'Patient/getAllPatientOrders')
      .map((res) => res.json());
  }


  saveSurvey_v1(data: any) {

    return this.http.post(this.baseUrl + '/' + 'visit/savesurvey_v1', data, this.options)
      .map((res) => res.json());

  }
  

  getDocPodReport_v1(medicalno: string, visitno: string) {
    return this.http.get(this.baseUrl + '/' + 'analysis/healthscore_v2/' + medicalno + '/' + visitno)
      .map((res) => res.json());
  }

  getSurvey_v1(medicalno: string, visitno: string) {
    return this.http.get(this.baseUrl + '/' + 'visit/getsurvey_v1/' + medicalno + '/' + visitno)
      .map((res) => res.json());
  }

  getPrediabeticScore_v1(medicalno: string, visitno: string) {
    return this.http.get(this.baseUrl + '/' + 'analysis/prediabetic_v1/' + medicalno + '/' + visitno)
      .map((res) => res.json());
  }
  

  updateResults(data: any) {
    
        return this.http.post(this.baseUrl + '/' + 'visit/updateresults', data, this.options)
          .map((res) => res.json());
    
      }

      getResults(medicalno: string, visitno: string) {
        return this.http.get(this.baseUrl + '/' + 'visit/getresults/' + medicalno + '/' + visitno)
          .map((res) => res.json());
      }
      getHealthScore_v1(medicalno: string, visitno: string) {
        return this.http.get(this.baseUrl + '/' + 'analysis/healthscore_v1/' + medicalno + '/' + visitno)
          .map((res) => res.json());
      }

      getCVDScore_v1(medicalno: string, visitno: string) {
        return this.http.get(this.baseUrl + '/' + 'analysis/cvdreport_v1/' + medicalno + '/' + visitno)
          .map((res) => res.json());
      }
      



}

