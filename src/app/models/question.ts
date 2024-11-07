import { S } from "@angular/cdk/keycodes";

export class Question {
    question: string;
    value: number;
    valueAsText: string;

    constructor(question: string) {
        this.question = question;
        this.value = 0;
        this.valueAsText = this.setFeedback(this.value);
    }

    setFeedback(value: number) {
        const valueAsTextArray: Array<string> = ["Ei Vielä Arvosteltu", "Huono", "Ok", "Hyvä"]
        return valueAsTextArray[value]
    }

    setValue(value: number) {
        this.valueAsText = this.setFeedback(value)
        this.value = value
    }

}
