import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CreatecardService } from 'src/app/services/createcard.service';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {
  Form!: FormGroup;
  id: any = localStorage.getItem("id");


  submitted: any;

  constructor(private createService: CreatecardService, private reactiveformmodule: ReactiveFormsModule, private formBuilder: FormBuilder, private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.Form = new FormGroup({

      title: new FormControl(''),
      body: new FormControl(''),
    })
  }

  create() {
    console.log(this.Form.value);
    this.createService.createCard(this.Form.value, this.id).subscribe((respond: any) => {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/today'], { relativeTo: this.route });
    })

  }

  card: any = [1, 2, 3, 3, 3, 3]

}