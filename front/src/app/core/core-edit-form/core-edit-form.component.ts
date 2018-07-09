import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ICore} from "../icore";

@Component({
  selector: 'app-core-edit-form',
  templateUrl: './core-edit-form.component.html',
  styleUrls: ['./core-edit-form.component.css']
})
export class CoreEditFormComponent implements OnInit {
  @Output() editCard = new EventEmitter<ICore>();
  @Input() item: ICore;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      color: ['', Validators.required]
    });

    this.form.setValue({
      name: `${this.item.name}`,
      color: `${this.item.color}`,
    });

  }

  onSubmitEditCard() {
    this.item.name = this.form.value.name;
    this.item.color = this.form.value.color;
    this.editCard.emit(this.item);
  }

}
