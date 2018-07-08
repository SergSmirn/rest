import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { CoreService } from './core.service';
import { AuthService } from '../auth/auth.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CoreComponent],
  exports: [CoreComponent],
  providers: [CoreService, AuthService]
})
export class CoreModule { }
