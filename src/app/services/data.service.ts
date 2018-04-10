import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {
  
  http:any;
  baseUrl:String;
  constructor(http:Http) { 
    
    this.http=http;
//    this.baseUrl="http://precisionmedicalhealth.com/docpodapi/index.php/api";  
    this.baseUrl="http://uniserb.com/docpodapi/index.php/api";  
    
    //this.baseUrl="http://localhost:8080/api.docpod/index.php/api";  

  }

  getMaritalStatus(){
    return this.http.get(this.baseUrl+'/'+'data/getmaritalstatus')
    .map((res) => res.json());
  }

  getCountry(){
    return this.http.get(this.baseUrl+'/'+'data/getcountry')
    .map((res) => res.json());
  }

}
