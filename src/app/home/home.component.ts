import { Component, OnInit } from '@angular/core';
import { Sondage } from '../modeles/sondage';
import { SondagesService } from '../services/sondages.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  sondages: Sondage[];

  rep = false;
  repe = false;
  constructor(
    private service: SondagesService,
    private serviceUser: UserService
  ) {}
  ngOnInit(): void {
    this.service.getSondag().subscribe(
      (res: any) => {
        this.sondages = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  confirme(id: string, i: number) {
    let dateDeb = this.serviceUser.getDate();
    if (dateDeb == null) {
      this.serviceUser.setDate(new Date());
      this.serviceUser.setClick(1);
    } else {
      let nbclick = this.serviceUser.getClick();
      let currentDate = new Date();
      let dateDebut = new Date(dateDeb);
      var hours = Math.abs(currentDate.getTime() - dateDebut.getTime()) / 36e5;
      if (nbclick <= 5 && hours < 24) {
        let aa = this.sondages[i].choix;
        this.service.voter(id, aa).subscribe(
          (res: any) => {
            this.serviceUser.setClick(nbclick + 1);
          },
          (err) => {
            console.log(err);
          }
        );
      }
      if (nbclick > 5) {
        alert('vous avez depasser le nombre de click');
      } else if (hours > 24) {
        this.serviceUser.removeDate();
        this.serviceUser.removeclick();
      }
    }
  }
  reponseOui(i: number) {
    this.sondages[i].choix = true;
  }

  reponseNon(i: number) {
    this.sondages[i].choix = false;
  }
}
