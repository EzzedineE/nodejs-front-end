import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  selectedFile: any;
  imgURL: any;
  userForm = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    prenom: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      Validators.required,
    ]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private services: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {}
  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };
  }
  register() {
    const newUser = this.userForm.value;
    const uploadData = new FormData();
    uploadData.append('nom', newUser.nom);
    uploadData.append('prenom', newUser.prenom);
    uploadData.append('email', newUser.email);
    uploadData.append('password', newUser.password);
    uploadData.append('image', this.selectedFile);
    this.services.register(uploadData).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['login']);
      },
      (err) => {
        this.toastr.error('E-mail Existant', 'error');
      }
    );
  }
}
