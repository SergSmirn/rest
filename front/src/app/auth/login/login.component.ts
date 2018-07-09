import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl('serega',
        [Validators.required,
        Validators.maxLength(100)]),
      password: new FormControl('1kristina1', [
        Validators.required
      ]),
    });
  }


  getErrors(errors: any) {
    return this.authService.getErrors(errors);
  }


  usernameValidation() {
    return this.form.get('username').invalid && this.form.get('username').touched;
  }

  passValidation() {
    const b = this.form.get('password').invalid
      && this.form.get('password').touched;

    return b;
  }

  onSubmit() {

    this.form.controls.username.markAsTouched();
    this.form.controls.password.markAsTouched();

    if (this.form.valid) {

      const username = this.form.controls.username.value;
      const password = this.form.controls.password.value;

      this.authService.login(username, password).subscribe(value => {
        this.authService.setToken(value['access_token']);
        this.router.navigate(['']);
      });

      this.form.reset();      
    }
  }
}
