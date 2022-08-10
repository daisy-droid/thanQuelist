

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  user: any;
  id: any;
  constructor( private route: Router, private auth: AuthService) {}
  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.minLength(10)]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  get f() {
    return this.form.controls;
  }

  log() {
    let userlogin = {
      data: {
        email: this.form.value.email,
        password: this.form.value.password,
      },
    };

    if (this.form.invalid) {
      return;
    } else {
      this.auth.loguser(userlogin.data).subscribe(
        (myData: any) => {
          this.user = myData.user[0].id;
          this.route.navigate(['/newsfeed']);
          console.log(this.user);
         
          localStorage.setItem('user_id', this.user);
          
          this.id = this.user;
        },
        (err) => {
          return err.error.errorMessage;
        }
      );
    }
  }
}
