import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetallService {


  baseurl:string = "http://localhost:8000/user";

  constructor(private http:HttpClient) { }

 getall(data: any){

    return this.http.post(`${this.baseurl}//`, data,{responseType:'json'});

  }
}
