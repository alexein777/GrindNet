import { Component, OnInit } from '@angular/core';
import { ToolbarItem } from '../shared/models/toolbar-item';
import { ToolbarItemsService } from '../services/toolbar-items.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  toolbarItems: ToolbarItem[];

  constructor(private toolbarItemsService: ToolbarItemsService) { }

  ngOnInit(): void {
    this.toolbarItems = this.toolbarItemsService.getToolbarItems();
  }

}
