import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule, FormBuilder , ReactiveFormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { response } from 'express';
import { CreatecardService } from 'src/app/services/createcard.service';
import { GetallService } from 'src/app/services/getall.service';
import { threadId } from 'worker_threads';



@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})


export class TodayComponent implements OnInit {
 Form! :FormGroup;


 
  submitted: any;
  card:any ;
   
   constructor(private getallservice :GetallService, private reactiveformmodule: ReactiveFormsModule, private formBuilder:FormBuilder, private router: Router) { }
 
   ngOnInit(): void {
    this.get()


   this.Form =  new FormGroup({
 
   entryId : new FormControl(''), 
   
   title : new FormControl(''), 
   body: new FormControl(''), 
 })
   }
 
   /*get(){
     //console.log(this.Form.value);
     this.getallservice.getall().subscribe((respond : any) =>{
      this.card=response
       console.log(respond)
     })*/
     get()
     {
      this.getallservice.getall().subscribe(
      data=>{
        this.card=data
      })
     }

     
   }

 // this.card=response any = [1,2,3,3,3,3]
  

