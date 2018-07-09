import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { CoreService } from './core.service';
import { AuthService } from '../auth/auth.service';
import { CorePreviewComponent } from './core-preview/core-preview.component';
import { CoreEditFormComponent } from './core-edit-form/core-edit-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CoreAddFormComponent} from "./core-add-form/core-add-form.component";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [CoreComponent, CorePreviewComponent, CoreEditFormComponent, CoreAddFormComponent],
  exports: [CoreComponent],
  providers: [CoreService, AuthService]
})
export class CoreModule { }
