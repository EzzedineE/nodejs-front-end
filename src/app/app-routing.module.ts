import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSondageComponent } from './add-sondage/add-sondage.component';
import { UserGuard } from './gardes/user.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [UserGuard] },
  { path: 'add', component: AddSondageComponent, canActivate: [UserGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
