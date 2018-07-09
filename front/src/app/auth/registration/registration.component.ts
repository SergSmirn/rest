import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({

      username: new FormControl(null,
        [Validators.required,
        Validators.maxLength(100)]),
      email: new FormControl(null, [Validators.required,
      Validators.email, Validators.maxLength(100)]),
      password: new FormControl(null,
        [Validators.required]),
    });
  }

  onSubmit() {

    this.form.controls.username.markAsTouched();
    this.form.controls.email.markAsTouched();
    this.form.controls.password.markAsTouched();

    if (this.form.valid) {

      const username = this.form.controls.username.value;
      const email = this.form.controls.email.value;
      const password = this.form.controls.password.value;

      this.authService.register(username, email, password).subscribe(value => {
        console.log('value', value);
        this.router.navigate(['/login']);
      });
      this.form.reset();
    }
  }

  getErrors(errors: any) {
    return this.authService.getErrors(errors);
  }

  usernameValidation() {
    return this.form.get('username').invalid && this.form.get('username').touched;
  }

  emailValidation() {
    return this.form.get('email').invalid && this.form.get('email').touched;
  }
  
  passValidation() {
    const b = this.form.get('password').invalid
      && this.form.get('password').touched;

    return b;
  }
}
