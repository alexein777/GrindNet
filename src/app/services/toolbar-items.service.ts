import { Injectable } from '@angular/core';

import { ToolbarItem } from '../shared/models/toolbar-item';
import { TOOLBAR_ITEMS } from '../shared/data/toolbar-items';

@Injectable({
  providedIn: 'root'
})
export class ToolbarItemsService {

  constructor() { }

  getToolbarItems() {
    return TOOLBAR_ITEMS;
  }
}
