import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CoreService } from './core.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {
  items$: Observable<any>;
  infoOpen = false;

  constructor(private coreService: CoreService) { }

  ngOnInit() { }

  renderItems() {
    this.items$ = this.coreService.listItems();
  }

  deleteItem(itemID) {
    this.coreService.deleteItem(itemID).subscribe(value => console.log(`success deleted item - ${ value }`));
  }

  detailItem(itemID) {
    this.coreService.getItem(itemID).subscribe(value => console.log(value));
  }

  onInfoOpen() {
    this.infoOpen = !this.infoOpen;
  }
}
