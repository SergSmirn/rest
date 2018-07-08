import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import {Router} from '@angular/router';


@Injectable()
export class AuthService {

  // private user$ = new BehaviorSubject<IUser>(null);
  // private loggedInSubject = new BehaviorSubject<boolean>(false);

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

  // getUser$(): Observable<IUser> {
  //   return this.user$.asObservable();
  // }

  // getUserId$(): Observable<string> {
  //   return this.getUser$()
  //     .map((user) => user ? user.uid : null);
  // }

  // getUserEmail$(): Observable<string> {
  //   return this.getUser$()
  //     .map((user) => user ? user.email : null);
  // }

  // getUserEmail(): string {
  //   return this.user$.getValue().email;
  // }


  // login({email, password}: ILogin): Observable<any> {
  //   return Observable.fromPromise(
  //     this.fireAuth
  //       .auth
  //       .signInWithEmailAndPassword(email, password)
  //   );
  //   // .do(() => {
  //   //  редирект в login.component
  //   // });
  // }



  // signUp({email, password}: ILogin): Observable<any> {
  //   return Observable.fromPromise(
  //     this.fireAuth
  //       .auth
  //       .createUserWithEmailAndPassword(email, password)
  //   )
  //   // борьба с авторизацией сразу после создания аккаунта
  //     .do(() => this.logout());
  //
  //   //   .do(() => {
  //   //      редирект в regist.component
  //   //   // в случае успеха - редирект на логин
  //   //   this.router.navigate(['login']);
  //   // });
  // }

  // logout() {
  //   this.fireAuth
  //     .auth
  //     .signOut()
  //     .then(() => this.router.navigate(['/']));
  // }


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
