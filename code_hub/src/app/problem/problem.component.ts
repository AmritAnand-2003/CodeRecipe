import { Component, OnInit } from '@angular/core';
import { ProblemService } from '../service/problem.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-problem',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    HeaderComponent
  ],
  templateUrl: './problem.component.html',
  styleUrl: './problem.component.css'
})
export class ProblemComponent implements OnInit{
  problem: any;
  language: string = 'python';
  code: string = '';
  input_data: string = '';
  output: string = '';
  constructor(private route: ActivatedRoute, private problemService: ProblemService) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.problemService.getProblemById(id!).subscribe(
      (data) => {
        console.log(data)
        this.problem = data;
      },
      (error) => {
        console.error('Error fetching problems', error);
      }
    );
  }

  runCode(): void {
    console.log('Running code:', this.code);
    // Implement the logic to run the code
    const codeData = {
      code: this.code,
      language: this.language,
      input_data: this.input_data
    }
    this.problemService.runCode(codeData).subscribe(
      (data) => {
        console.log(data)
        this.output = data;
      },
      (error) => {
        console.error('Error fetching problems', error);
      }
    );
  }

  submitCode(): void {
    console.log('Submitting code:', this.code);
    // Implement the logic to submit the code
    const codeData = {
      code: this.code,
      language: this.language,
      problem: this.problem.id
    }
    this.problemService.submitCode(codeData).subscribe(
      (data) => {
        console.log(data)
        this.output = data;
      },
      (error) => {
        console.error('Error fetching problems', error);
      }
    );
  }
}
