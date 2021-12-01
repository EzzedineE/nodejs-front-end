export class Sondage {
  titre: string;
  description: string;
  repenses: Repenses[];
  answered: boolean;
  _id: string;
  choix: boolean;
  oui: number;
  non: number;
  constructor(
    _id: string = '',
    titre: string = '',
    description: string = '',
    repenses: Repenses[],
    non: number = 0,
    oui: number = 0,
    answered: boolean = false
  ) {
    (this._id = _id),
      (this.titre = titre),
      (this.description = description),
      (this.answered = answered);
    this.repenses = repenses;
    (this.oui = oui), (this.non = non);
  }
}
export class Repenses {
  oui: number;
  non: number;

  constructor(oui: number = 0, non: number = 0) {
    this.oui = oui;
    this.non = non;
  }
}
