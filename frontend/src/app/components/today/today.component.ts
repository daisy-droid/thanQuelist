import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule, FormBuilder , ReactiveFormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { CreatecardService } from 'src/app/services/createcard.service';
import { GetallService } from 'src/app/services/getall.service';



@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})


export class TodayComponent implements OnInit {
 Form! :FormGroup;


 
  submitted: any;
   
   constructor(private getallservice :GetallService, private reactiveformmodule: ReactiveFormsModule, private formBuilder:FormBuilder, private router: Router) { }
 
   ngOnInit(): void {
    this.get()
   this.Form =  new FormGroup({
 
   entryId : new FormControl(''), 
   
   title : new FormControl(''), 
   body: new FormControl(''), 
 })
   }
 
   get(){
     //console.log(this.Form.value);
     this.getallservice.getall().subscribe((respond : any) =>{
       this.submitted=true;
       console.log(respond)
     })
     
   }

  card: any = [1,2,3,3,3,3]
  
}
