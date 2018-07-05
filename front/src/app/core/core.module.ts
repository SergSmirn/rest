import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { CoreService } from './core.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CoreComponent],
  providers: [CoreService]
})
export class CoreModule { }
