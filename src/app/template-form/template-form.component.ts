import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Person } from '../models/person';


@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, MatCheckboxModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {
  person: Person = new Person;
  checked: boolean = false;
  confirmpass: string = "";

  onSubmit(e: any) {
    console.log(e.value)
    console.log(e.value.firstname);
    console.log(e.controls['firstname'].status);
  }
}
