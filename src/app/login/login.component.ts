import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserAccountService } from '../services/user-account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  anyAccounts = false;

  loggedUser = {
    username: '',
    password: ''
  };

  constructor(public dialogRef: MatDialogRef<LoginComponent>, private uaService: UserAccountService) { }

  ngOnInit(): void {
    if (this.uaService.hasAccounts()) {
      this.anyAccounts = true;
    }
  }

  onSubmit() {
    this.dialogRef.close();
  }

}
