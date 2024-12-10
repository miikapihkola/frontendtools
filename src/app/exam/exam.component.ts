import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { ExamSvService } from '../services/exam-sv.service';
import { ExamOrder } from '../models/exam-order';

@Component({
  selector: 'app-exam',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, MatCheckboxModule, MatDividerModule, MatGridListModule],
  templateUrl: './exam.component.html',
  styleUrl: './exam.component.css'
})
export class ExamComponent {

  order: ExamOrder = new ExamOrder

  lippuText: string[] = ["Peruslippu", "Opiskelija", "Eläkeläinen"]
  lippuCount: number[] = [0, 0, 0]
  lippuPrice: number[] = [15, 10, 8, 0.85]
  orderTotal: number = 0;

  mtk: boolean = false;

  constructor(private examSv: ExamSvService) {
  }

  // Lippu buttonit
  lessLippu(x: number) {
    if (this.lippuCount[x] > 0) {
      this.lippuCount[x]--;
      this.updatePrice();
    }
  }

  moreLippu(x: number) {
    this.lippuCount[x]++;
    this.updatePrice();
  }

  mtkToggle() {
    if (this.mtk == false) { this.mtk = true }
    else { this.mtk = false }

    this.updatePrice()
  }

  updatePrice() {
    // Jos aikaa etsi miten toimii ts for loop
    this.orderTotal = this.lippuCount[0] * this.lippuPrice[0] + this.lippuCount[1] * this.lippuPrice[1] + this.lippuCount[2] * this.lippuPrice[2]
    if (this.mtk) {
      this.orderTotal = this.orderTotal * this.lippuPrice[3]
    }
    // Jos aikaa etsi miten pyöristetään 2 decimaalin tarkkuuteen
    // esim 6 2 3 true saa infine decit
  }

  // Submit
  onSubmit(e: any) {
    //console.log(e.value)
    this.order.perusLippu = this.lippuCount[0];
    this.order.opiskelijaLippu = this.lippuCount[1];
    this.order.eläkelaisLippu = this.lippuCount[2];
    this.order.mtkjasen = this.mtk;
    this.order.orderTotal = this.orderTotal;
    this.order.tilaajanEtuNimi = e.value.firstname;
    this.order.tilaajanSukunimi = e.value.lastname;
    this.order.tilaajanEmail = e.value.email;

    this.examSv.saveOrder(this.order)
  }

}
