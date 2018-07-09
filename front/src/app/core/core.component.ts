import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CoreService } from './core.service';
import {ICore} from "./icore";
import { Router } from '@angular/router';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {
  items$: Observable<ICore[]>;
  editOpen: number = null;
  previewOpen: number = null;

  constructor(private coreService: CoreService, private router: Router) { }

  ngOnInit() {
    if (!this.coreService.getInited()) {
      this.coreService.setInited(true);
      this.router.navigate(['/login']);
    }
    else {
      this.items$ = this.coreService.listItems();
    }
  }

  clickPreview(id: number) {

    if (this.previewOpen === id) {
      this.previewOpen = null;
      return;
    }

    this.previewOpen = id;
  }

  deleteItem(id: number) {
    this.coreService.deleteItem(id)
      .subscribe(() => this.items$ = this.coreService.listItems());
  }

  cardEdit(id: number) {

    if (this.editOpen === id) {
      this.editOpen = null;
      return;
    }

    this.editOpen = id;
  }

  detailItem(itemID) {
    this.coreService.getItem(itemID)
      .subscribe(value => console.log(value));
  }

  updateCard(item: ICore) {
    console.log(item);
    this.coreService.updateItem(item)
      .subscribe(value => {
        console.log(value);
        this.editOpen = null;
      });
  }

  newItem(item: ICore) {
    console.log(item);
    this.coreService.createItem(item)
      .subscribe(() => {
        this.items$ = this.coreService.listItems();
      });
  }
}
