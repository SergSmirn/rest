import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private authService: AuthService,
    // private router: Router
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      // for dev
      username: new FormControl('ser',
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

      // // см регистрационный компонентн
      // this.authService.login({email, password})
      //   .subscribe(value => {
      //
      //     this.notifyService.generateNotification(
      //       `Успешный вход`,
      //       'success'
      //     );
      //     // alert(`Login.component Успешный вход - ${value}`);
      //
      //     // странный core  -  тут наследуются стили от auth.component.css !!!
      //     this.router.navigate(['core']);
      //
      //   }, error => {
      //
      //     this.notifyService.generateNotification(
      //       `Неверный email или пароль : ${error}`,
      //       'warning');
      //     // alert(`Login.component ошибочный вход - ${error}`);
      //
      //   });

      // alert(`pass ${password}, email ${email}`);


      this.authService.login(username, password).subscribe(value => {
        console.log('value', value);
        this.authService.setToken(value['access_token']);
      });

      this.form.reset();
    }
  }
}
