import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup = new FormGroup({
    firstname: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    acceptTerms: new FormControl(false),
  });
  submitted = false;

  constructor(private formBuilder: FormBuilder, private auth: AuthService) {}

  ngOnInit(): void {

    this.form = this.formBuilder.group(
      {
        firstname: ['', Validators.required],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
      },
     
    );
  }

  get f() {
    return this.form.controls;
  }
  //onsubmit fuction to be called on the html
  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    this.auth.loguser(this.form.value).subscribe(
      {
        next: (res: any)=>{
          console.log(res);
        },error: (err: any)=>{
          console.log(err)
        }
      }
    )

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  //this is a reset function to be called in the html as reset button
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}
