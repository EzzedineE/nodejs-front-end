import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SondagesService } from '../services/sondages.service';
@Component({
  selector: 'app-add-sondage',
  templateUrl: './add-sondage.component.html',
  styleUrls: ['./add-sondage.component.css'],
})
export class AddSondageComponent implements OnInit {
  sondage = new FormGroup({
    titre: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });
  constructor(private service: SondagesService, private router: Router) {}
  ngOnInit(): void {}
  add() {
    this.service.addSondage(this.sondage.value).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
