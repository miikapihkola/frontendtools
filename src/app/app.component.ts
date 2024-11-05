import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CalculatorComponent } from './calculator/calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PageNotFoundComponent, CalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontendtools';
}
