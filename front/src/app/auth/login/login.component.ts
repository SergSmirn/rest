import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {AuthService} from '../auth.service';

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
      email: new FormControl('alexplusm@ya.ru',
        // email: new FormControl(null,
        [Validators.required,
          Validators.maxLength(100),
          Validators.email]),
      password: new FormControl(null, [
        Validators.required
      ]),
    });
  }


  getErrors(errors: any) {
    return this.authService.getErrors(errors);
  }


  emailValidation() {
    return this.form.get('email').invalid && this.form.get('email').touched;
  }

  passValidation() {
    const b = this.form.get('password').invalid
      && this.form.get('password').touched;

    return b;
  }

  onSubmit() {

    this.form.controls.email.markAsTouched();
    this.form.controls.password.markAsTouched();

    if (this.form.valid) {

      const email = this.form.controls.email.value;
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

      alert(`pass ${password}, email ${email}`);

      this.form.reset();
    }
  }
}
