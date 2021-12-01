export class User {
  _id: string;
  nom: string;
  prenom: string;
  email: string;
  password: string;
  image: string;

  constructor(
    _id: string = '',
    nom: string = '',
    prenom: string = '',
    email: string = '',
    password: string = '',
    image: string = ''
  ) {
    (this._id = _id),
      (this.nom = nom),
      (this.prenom = prenom),
      (this.email = email),
      (this.password = password),
      (this.image = image);
  }
}
