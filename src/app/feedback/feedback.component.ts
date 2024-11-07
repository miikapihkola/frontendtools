import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';
import { Question } from '../models/question';
import questions from '../models/questions.json'

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatSliderModule, MatDividerModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {

  questionsArray: Array<Question> = new Array;

  ngOnInit() {
    this.createQuestions();
  }

  createQuestions() {
    for (var i = 0; i < questions.length; i++) {
      this.questionsArray.push(new Question(questions[i].question))
    }
  }

  onInputChange(event: any, q: string) {
    for (var i = 0; i < this.questionsArray.length; i++) {
      if (this.questionsArray[i].question == q) {
        this.questionsArray[i].setValue(event.target.value);
        break;
      }
    }
  }
}
