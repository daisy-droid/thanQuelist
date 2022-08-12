import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { response } from 'express';
import { CreatecardService } from 'src/app/services/createcard.service';
import { GetallService } from 'src/app/services/getall.service';
import { DeletecardService } from 'src/app/services/deletecard.service';
import { threadId } from 'worker_threads';



@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})


export class TodayComponent implements OnInit {
  Form!: FormGroup;



  submitted: any;
  card: any;

  constructor(private getallservice: GetallService, private reactiveformmodule: ReactiveFormsModule, private formBuilder: FormBuilder, private router: Router,
    private route: ActivatedRoute,
    private deletecardservice: DeletecardService) { }

  ngOnInit(): void {

    this.Form = new FormGroup({

      entryId: new FormControl(''),

      title: new FormControl(''),
      body: new FormControl(''),
    })


    this.getallservice.getall(localStorage.getItem("id")).subscribe(
      data => {
        this.card = data
        console.log(data)
      })
  }

  /*get(){
    //console.log(this.Form.value);
    this.getallservice.getall().subscribe((respond : any) =>{
     this.card=response
      console.log(respond)
    })*/

  id: any;
  //delete
  send(num: any) {
    this.id = num;
    console.log(this.id)
  }

  delete() {
    console.log(this.card[this.id].entryid)

    this.deletecardservice.deletecard(this.card[this.id].entryid).subscribe(
      (res:any)=>{
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/today'], { relativeTo: this.route });
      },(err)=>{
        console.log(err)
      }
    )
  }
}


 // this.card=response any = [1,2,3,3,3,3]


