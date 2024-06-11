import { Component, OnInit } from '@angular/core';
import { ProblemService } from '../service/problem.service';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    MatFormFieldModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatDividerModule,
    HeaderComponent


  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  problems: any[] = [];
  constructor(private problemService: ProblemService) {}
  ngOnInit(): void {
    this.problemService.getProblems().subscribe(
      (data) => {
        console.log(data)
        this.problems = data;
      },
      (error) => {
        console.error('Error fetching problems', error);
      }
    );
  }
}
