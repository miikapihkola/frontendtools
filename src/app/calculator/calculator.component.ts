import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatButtonModule, MatCardModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})

export class CalculatorComponent {
  buttons: string[] = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '+', '='];
  calc: string = "";
  result: string = "";

  addValue(value: any) {
    switch (value) {
      case '=':
        if (this.calc.at(-1) != ' ' && this.calc != "") {
          try {
            this.result = this.calc + ' = ' + eval?.(this.calc);
            if (eval?.(this.calc) == "Infinity") {
              this.result = " ERROR "
            }
            else {
              this.calc = eval?.(this.calc);
            }
          }
          catch {
            this.result = " ERROR "
          }
          this.calc = "";
        }
        break;
      case 'C':
        this.calc = "";
        this.result = this.calc;
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        if (this.calc.at(-1) != ' ' && this.calc != "") {
          this.calc = this.calc + " " + value + " ";
          this.result = this.calc;
        }
        break;
      default:
        this.calc = this.calc + value;
        this.result = this.calc;
        break;
    }
  }
}


