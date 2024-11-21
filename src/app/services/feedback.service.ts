import { Injectable } from '@angular/core';
import { Question } from '../models/question';
import questions from '../models/questions.json'

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor() { }

  questionsArray: Array<Question> = new Array;

  getQuestions() {
    this.questionsArray = [];
    for (var i = 0; i < questions.length; i++) {
      this.questionsArray.push(new Question(questions[i].question))
    }
    return this.questionsArray;
  }
}
