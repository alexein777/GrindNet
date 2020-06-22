import { Directive, ElementRef } from '@angular/core';
import { UserAccountService } from './services/user-account.service';

@Directive({
  selector: '[appLoginDisable]'
})
export class LoginDisableDirective {

  constructor(public element: ElementRef, private uaService: UserAccountService) {
    if (!this.uaService.hasAccounts() ) {
      element.nativeElement.disabled = 'disabled';
    }
  }

}
