import { Component, HostListener, ElementRef } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { AngularSplitModule } from 'angular-split';
import { MatDividerModule } from '@angular/material/divider';




@Component({
  selector: 'app-code-run',
  standalone: true,
  imports: [
    HeaderComponent,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    CommonModule,
    CodemirrorModule,
    AngularSplitModule,
    MatDividerModule
  ],
  templateUrl: './code-run.component.html',
  styleUrl: './code-run.component.css'
})



export class CodeRunComponent {
  code: string = '';
  input: string = '';
  output: string = '';
  selectedLanguage: string = 'Python';
  languages: string[] = ['Python', 'C++', 'C'];
  isResizing: boolean = false;

  languageSamples: { [key: string]: string } = {
    'Python': `print('Hello, world!')`,
    'C++': `#include <iostream>\nusing namespace std; \n\nint main() {\n\t cout << "Hello, world!" <<endl;\n\t return 0;\n }`,
    'C': `#include <stdio.h> \n\nint main() {\n\tprintf("Hello, world!"); \n\treturn 0;\n}`
  };

  runCode() {
    // Logic to execute the code based on the selected language
    this.output = `Running code in ${this.selectedLanguage}...`;
  }

  startResizing(event: MouseEvent) {
    this.isResizing = true;
  }

  isDragging = false;
  startY: number = 0;
  startHeight: number = 0;

  constructor(private elRef: ElementRef) {
    this.setSampleCode(this.selectedLanguage); 
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      const deltaY = event.clientY - this.startY;
      const newHeight = this.startHeight + deltaY;
      this.elRef.nativeElement.querySelector('.input-output-content').style.height = `${newHeight}px`;
    }
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    this.isDragging = false;
  }

  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.startY = event.clientY;
    this.startHeight = this.elRef.nativeElement.querySelector('.input-output-content').clientHeight;
  }

  setSampleCode(language: string) {
    this.code = this.languageSamples[language] || '';
  }

  onLanguageChange(language: string) {
    this.selectedLanguage = language;
    this.setSampleCode(language);
  }
}