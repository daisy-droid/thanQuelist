import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule, FormBuilder , ReactiveFormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { CreatecardService } from 'src/app/services/createcard.service';



@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})


export class TodayComponent implements OnInit {
 Form! :FormGroup;

 submitted: any;
  
  constructor() { }

  ngOnInit(): void {
  
  }



  card: any = [1,2,3,3,3,3]
  
}
