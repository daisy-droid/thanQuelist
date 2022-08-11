import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule, FormBuilder , ReactiveFormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { CreatecardService } from 'src/app/services/createcard.service';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {
  Form! :FormGroup;
 
  submitted: any;
   
   constructor(private createService :CreatecardService, private reactiveformmodule: ReactiveFormsModule, private formBuilder:FormBuilder, private router: Router) { }
 
   ngOnInit(): void {
   this.Form =  new FormGroup({
 
   entryId : new FormControl(''), 
   
   title : new FormControl(''), 
   body: new FormControl(''), 
 })
   }
 
   create(){
     console.log(this.Form.value);
     this.createService.createCard(this.Form.value).subscribe((respond : any) =>{
       this.submitted=true;
       console.log(respond)
     })
     
   }
 
   card: any = [1,2,3,3,3,3]
   
 }