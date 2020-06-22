import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserAccount } from '../shared/models/user-account';
import { UserAccountService } from '../services/user-account.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  // @ViewChild('sponsorsCheckbox') sponsorsCheckbox: ElementRef;
  @ViewChild('sform') signupFormDirective;

  sponsoredPlayer = false;
  signupForm: FormGroup;
  emailPattern = '[a-zA-Z][a-zA-Z0-9_\.]*@[a-z]+[.][a-z]+';

  FORM_INITIAL_VALUE = {
    'username': '',
    'password': '',
    'email': '',
    'sponsors': ''
  };

  formErrors = {
    'username': '',
    'password': '',
    'email': '',
    'sponsors': ''
  };

  validationMessages = {
    'username': {
      'required': 'Username is required',
      'minlength': 'Username must be at least 2 characters long',
      'maxlength': 'Username can\'t be over 20 characters long'
    },
    'password': {
      'required': 'Password is required',
      'minlength': 'Password must be at least 4 characters long',
      'maxlength': 'Password can\'t be over 25 characters long',
    },
    'email': {
      'required': 'Email is required',
      'email': 'Invalid email pattern'
    }
  };

  constructor(private fb: FormBuilder, private uaService: UserAccountService) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]],
      email: ['', [Validators.required, Validators.email]],
      sponsors: ['']
    });

    this.signupForm.valueChanges
      .subscribe(data => this.onValueChanges(data));

    this.onValueChanges();  // Inicijalni (re)set poruka
  }

  onValueChanges(data?: any) {
    if (!this.signupForm) { return; }

    const form = this.signupForm;

    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        this.formErrors[field] = ''; // reset previous error messages (if any)
        const control = form.get(field); // get current field

        // If there were changes and field is invalid
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field]; // get val. messages for the corresponding field

          // Check which errors occured from the control field
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' '; // add the error messages
            }
          }
        }
      }
    }
  }

  onChangeSponsorship() {
    this.sponsoredPlayer = !this.sponsoredPlayer;
  }

  onResetForm() {
    this.signupForm.reset(this.FORM_INITIAL_VALUE);
    this.signupFormDirective.resetForm();
  }

  onSubmit() {
    const newUserAccount = this.signupForm.value;
    this.uaService.addUserAccount(newUserAccount);
    console.log(newUserAccount);

    this.onResetForm();
  }
}
