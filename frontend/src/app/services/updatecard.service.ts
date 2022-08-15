import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdatecardService {

  baseurl:string = "http://localhost:8000/user";

  constructor(private http:HttpClient) { }

  updatecard(entryId: any, data:any){
    return this.http.put(`${this.baseurl}/update/${entryId}`, data,{responseType:'json'}); //passing using params entryid
  }
}
