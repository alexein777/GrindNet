import { Component, OnInit } from '@angular/core';
import { NavbarItem } from '../shared/models/navbar-item';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navbarItems: NavbarItem[];

  constructor(private navbarService: NavbarService) { }

  ngOnInit(): void {
    this.navbarItems = this.navbarService.getNavbarItems();
  }

}
