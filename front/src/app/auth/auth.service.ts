import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class AuthService {

  private clientID = 'Pb1yHpASt4Ufd1yPCnq3SEriKJfA0joX2X0ywTri';
  private clientSecret = 's8zwYfEv7RATfXl3MCApw0e4aofIlioPtGizVpT6PZ1mVmPmsIp5GaE9ngYRrGkhRaCXXHyNlptVXYBcGeWHhccp7'
    + 'I8HDvTi9j66Qy09tW6iqRbncwAhfsBc86vfNchg';

  private loginUrl = 'http://localhost:8002/o/token/';
  private registerUrl = 'http://localhost:8002/signup/';
  private grantType = 'password';
  private token = '';

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    const headers = new HttpHeaders(
      {
        'Authorization': 'Basic ' + btoa(`${this.clientID}:${this.clientSecret}`),
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    );

    const options = { headers: headers };

    const data = `grant_type=${this.grantType}&username=${username}&password=${password}`;

    return this.http.post(this.loginUrl, data, options);

  }

  register(username: string, email: string, password: string) {
    const data = {username, email, password};
    return this.http.post(this.registerUrl, data);
  }

  setToken(token) {
    this.token = token;
  }

  getToken() {
    return this.token;
  }

  getErrors(errors: any): string {

    if (errors !== null) {
      if (errors['required']) {
        return 'поле обязательно для заполнения';
      }
      if (errors['email']) {
        return 'Введите действительный адрес электронной почты';
      }
      if (errors['maxlength']) {
        return `максимальная длина — ${errors['maxlength']['requiredLength']}`;
      }
      if (errors['minlength']) {
        return `минимальная длина — ${errors['minlength']['requiredLength']}`;
      }
      if (errors['pattern']) {
        return `нужна маленькая и большая английская буковка,
                циферка и какой нибудь спецсимвол (!#$-+)`;
      }
      if (errors['passConfirmError']) {
        return `Пароли не совпадают`;
      }
    }
    return;
  }

}
