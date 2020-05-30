import { Injectable } from '@angular/core';

import { NavbarItem } from '../shared/models/navbar-item';
import { NAVBAR_ITEMS } from '../shared/data/navbar-items';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor() { }

  getNavbarItems() {
    return NAVBAR_ITEMS;
  }
}
