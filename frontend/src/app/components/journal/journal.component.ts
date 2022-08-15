import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CreatecardService } from 'src/app/services/createcard.service';
import { GetallService } from 'src/app/services/getall.service';
import { ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {
  Form!: FormGroup;
  id: any = localStorage.getItem("id");
  cardupdate:any
  cardinfo :any

  submitted: any;


  constructor(private createService: CreatecardService, private reactiveformmodule: ReactiveFormsModule, private formBuilder: FormBuilder, private router: Router,
    private activated: ActivatedRoute,private getallservice: GetallService) { }

  ngOnInit(): void {
    this.Form = new FormGroup({

      title: new FormControl(''),
      body: new FormControl(''),
    })

    let id:number=this.activated.snapshot.params['id'];

    this.getall(id)
  }

  create() {
    let user={
      title:this.cardinfo.title,
      body:  this.cardinfo.body
    }
    console.log(user)
    
    // this.createService.createCard(this.Form.value, this.id).subscribe((respond: any) => {
    //   this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    //   this.router.onSameUrlNavigation = 'reload';
    //   this.router.navigate(['/today'], { relativeTo: this.activated });
    // })

  }

  getall(userId:number){
    return this.getallservice.getall(userId).subscribe({
      next:(data:any) =>{
        this.cardupdate=data
        this.cardinfo=this.cardupdate[0]
        console.log(this.cardinfo)
      }
    })
  }
 // card: any = [1, 2, 3, 3, 3, 3]

}