import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ICore} from "../icore";

@Component({
  selector: 'app-core-add-form',
  templateUrl: './core-add-form.component.html',
  styleUrls: ['./core-add-form.component.css']
})
export class CoreAddFormComponent implements OnInit {
  @Output() newItem = new EventEmitter<ICore>();
  form: FormGroup;
  formOpen = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      color: ['', Validators.required]
    })
  }

  onSubmitNewItem() {
    this.newItem.emit(this.form.value);
    this.form.reset();
  }

  formToggle() {
    this.formOpen = !this.formOpen;
  }
}
