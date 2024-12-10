export class ExamOrder {
    perusLippu: number;
    opiskelijaLippu: number;
    eläkelaisLippu: number;
    mtkjasen: boolean;
    orderTotal: number;
    tilaajanEtuNimi: string;
    tilaajanSukunimi: string;
    tilaajanEmail: string;

    constructor() {
        this.perusLippu = 0;
        this.opiskelijaLippu = 0;
        this.eläkelaisLippu = 0;
        this.mtkjasen = false;
        this.orderTotal = 0;
        this.tilaajanEtuNimi = "";
        this.tilaajanSukunimi = "";
        this.tilaajanEmail = "";
    }
}
