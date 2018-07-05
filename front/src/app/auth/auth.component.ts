import { Component, OnInit } from '@angular/core';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {

    console.log('on init');
    this.authService.getReq()
      .subscribe(value => {
        console.log('ghbdtn', value);
    });

    this.authService.postReq('alex', 'qwe123')
      .subscribe(value => {
        console.log('valueeeeee', value);
    });
  }

}
