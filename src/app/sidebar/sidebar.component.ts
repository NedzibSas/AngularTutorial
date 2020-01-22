import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { Items } from '../tuto/Items';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  items: Items[];

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.itemsService.getItems().subscribe(
      items => {
        this.items = items;
      }
    );
  }

}
