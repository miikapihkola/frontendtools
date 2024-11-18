import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { Person } from '../models/person';


@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, MatCheckboxModule, ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})

export class ReactiveFormComponent {

  profileForm: FormGroup;
  person: Person;
  passwordcon: string = "";
  tacbool: boolean = false;
  constructor() {
    this.person = new Person();
    this.profileForm = new FormGroup({
      firstname: new FormControl(this.person.firstname, [Validators.required, Validators.minLength(2), Validators.pattern("^[a-öA-Ö]*$")]),
      lastname: new FormControl(this.person.lastname, [Validators.required, Validators.minLength(2), Validators.pattern("^[a-öA-Ö]*$")]),
      personid: new FormControl(this.person.personid, [Validators.required, Validators.pattern("^(0[1-9]|[12]\\d|3[01])(0[1-9]|1[0-2])([5-9]\\d\\+|\\d\\d[-U-Y]|[0-2]\\d[A-F])\\d{3}[\\dA-Z]$")]),
      email: new FormControl(this.person.email, [Validators.required, Validators.email]),
      username: new FormControl(this.person.username, [Validators.required, Validators.minLength(6)]),
      password: new FormControl(this.person.username, [Validators.required, Validators.minLength(10), Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{10,}$")]),
      password2: new FormControl(this.passwordcon, [Validators.required]),
      tac: new FormControl(this.tacbool, [Validators.requiredTrue])
    });
  }

  get firstname() {
    return this.profileForm.get('firstname');
  }
  get lastname() {
    return this.profileForm.get('lastname');
  }
  get personid() {
    return this.profileForm.get('personid');
  }
  get email() {
    return this.profileForm.get('email');
  }
  get username() {
    return this.profileForm.get('username');
  }
  get password() {
    return this.profileForm.get('password');
  }
  get password2() {
    return this.profileForm.get('password2');
  }
  get tac() {
    return this.profileForm.get('tac');
  }

  onSubmit() {
    console.log(this.profileForm.value)
    console.log(this.profileForm.value.firstname)
    console.log(this.profileForm.valid)
    this.profileForm.reset();
  }
}
