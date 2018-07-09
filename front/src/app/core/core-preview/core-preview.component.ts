import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICore} from "../icore";

@Component({
  selector: 'app-core-preview',
  templateUrl: './core-preview.component.html',
  styleUrls: ['./core-preview.component.css']
})
export class CorePreviewComponent implements OnInit {
  @Input() item: ICore;
  @Input() previewOpen: number;
  @Input() editOpen: number;
  @Output() clickPreview = new EventEmitter<number>();
  @Output() cardDelete = new EventEmitter<number>();
  @Output() cardEdit = new EventEmitter<number>();
  @Output() itemUpdate = new EventEmitter<ICore>();

  constructor() { }

  ngOnInit() {
  }

  onClickPreview(id: number) {
    this.clickPreview.emit(id);
  }

  openPreview(id: number): boolean {
    return this.previewOpen === id;
  }

  onItemDelete(id: number) {
    event.stopPropagation();

    this.cardDelete.emit(id);
  }

  onCoreEdit(id: number) {
    this.cardEdit.emit(id);
  }

  formEditOpen(id: number): boolean {
    return this.editOpen === id;
  }

  editCore(item: ICore) {
    this.itemUpdate.emit(item);
    console.log(item);
  }
}
