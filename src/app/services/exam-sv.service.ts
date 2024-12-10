import { Injectable } from '@angular/core';
import { ExamOrder } from '../models/exam-order';

@Injectable({
  providedIn: 'root'
})
export class ExamSvService {

  constructor() { }
  ordersArray: Array<ExamOrder> = [];

  saveOrder(order: ExamOrder) {
    this.ordersArray.push(order)
    //console.log(this.ordersArray)
    console.log(order)
  }
}
