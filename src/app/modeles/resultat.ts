import { Sondage } from './sondage';

export class Resultat {
  sondage: Sondage;
  note: number;

  constructor(sondage: Sondage, note: number) {
    (this.sondage = sondage), (this.note = note);
  }
}
