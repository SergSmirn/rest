import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthComponent } from './auth.component';
import {AuthService} from './auth.service';
import {LoginModule} from './login/login.module';
import {RegistrationModule} from './registration/registration.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,


    LoginModule,
    RegistrationModule,
  ],
  declarations: [AuthComponent],
  exports: [AuthComponent],
  providers: [AuthService]
})
export class AuthModule { }
