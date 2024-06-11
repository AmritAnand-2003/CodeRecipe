import { Component } from '@angular/core';
import { Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { merge } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { RegisterService } from '../service/register.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    CommonModule,
    RouterModule,
    MatCardModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  hide = true;
  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }

  username: string = '';
  email: string = '';
  password: string = '';

  // errorMessage = '';

  constructor(private registerService: RegisterService, private router: Router) {}



  isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  onSubmit() {
    console.log("Form submitted",this.username, this.email, this.password);
    this.registerService.register({username: this.username, email: this.email, password: this.password}).subscribe(
      response => {
        console.log('Registration successful', response);
        this.router.navigate(['login-component']).then(
          (nav) => {
            console.log('Navigation successful:', nav);
          },
          (err) => {
            console.error('Navigation failed:', err);
          }
        );
      },
      error => {
        console.error('Registration failed', error);
      }
    );
  }
}
