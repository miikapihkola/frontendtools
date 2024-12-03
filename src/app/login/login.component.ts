import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import { Person } from '../models/person';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {



  /* admin creds:
   email: a@g.com
   password: 123456 
  */
  constructor(public router: Router, private authService: AuthServiceService) { }
  person: Person = new Person;
  formSubmitAttempt: boolean | undefined;

  onSubmit(loginForm: any) {
    if (loginForm.valid) {
      this.authService.login(loginForm.value.email, loginForm.value.password)
      this.formSubmitAttempt = true;
    }
  }

  onCancel() {
    this.router.navigate(['hello']);
  }
}
