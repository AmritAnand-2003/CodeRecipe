import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { MatCard } from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatCard,
    MatCardModule,
    RouterLink
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  constructor(private loginService: LoginService, private router: Router) {}
  username: string = '';
  password: string = '';

  hide =  true;

  onSubmit() {
    
    console.log("Form submitted",this.username, this.password);
    this.loginService.login({username: this.username, password: this.password}).subscribe(
      response => {
        console.log('Login successful', response);
        this.router.navigate(['/home-component']);
      },
      error => {
        console.error('Registration failed', error);
      }
    );
  }
}
