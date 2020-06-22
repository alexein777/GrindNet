import { Injectable } from '@angular/core';
import { UserAccount } from '../shared/models/user-account';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {
  userAccountDatabase: UserAccount[] = [];

  constructor() { }

  addUserAccount(newUser: UserAccount) {
    this.userAccountDatabase.push(newUser);
  }

  hasAccounts() {
    return this.userAccountDatabase.length > 0;
  }
}
