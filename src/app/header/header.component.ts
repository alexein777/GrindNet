import { Component, OnInit } from '@angular/core';
import { NavbarItem } from '../shared/models/navbar-item';
import { NavbarService } from '../services/navbar.service';
import { MatDialog } from '@angular/material/dialog';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navbarItems: NavbarItem[];

  constructor(private navbarService: NavbarService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.navbarItems = this.navbarService.getNavbarItems();
  }

  openLoginForm() {
    // TODO: zavrsiti
  }

  openSignUpForm() {
    const windowOptions = { width: '450px', height: '520px'};
    this.dialog.open(SignUpComponent, windowOptions);
  }

}
