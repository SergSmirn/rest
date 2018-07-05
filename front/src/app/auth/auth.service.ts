import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
// import {Router} from '@angular/router';


@Injectable()
export class AuthService {

  // private user$ = new BehaviorSubject<IUser>(null);
  // private loggedInSubject = new BehaviorSubject<boolean>(false);


  private grantType = 'password&username';
  private localhostUrl = 'http://localhost:8000/';
  private httpOtions = '';

  constructor(private http: HttpClient) {

    // this.postReq(this.lochalUrl, 'alex', 'qwe123')
    //   .subscribe(value => {
    //     console.log('valueeeeee', value);
    // });

    // this.getReq()
    //   .subscribe(value => {
    //     console.log('--- value', value);
    //   });
    }



  getReq() {
    const options = {params: new HttpParams().set('name', 'alex')};

    return this.http.get(this.localhostUrl, options);
  }

  postReq(username: string, password: string) {

    const headers = new HttpHeaders(
      {
        'Access-Control-Allow-Origin': '*',
        'Content-Type' : 'application/json; charset=utf-8',
        'Authorization' : 'Basic ' + btoa(`${username}:${password}`)
      });

    console.log('------- headers', headers);
    const options = { headers: headers };

    // const data = {
    //   id: '1'
    // };

    const data = 'asdsad';


    return this.http.post(this.localhostUrl, data);
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

  login() {

  }

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
