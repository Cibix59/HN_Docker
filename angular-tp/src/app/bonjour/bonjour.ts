import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { NgStyle, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-bonjour',
  imports: [FormsModule, NgStyle, UpperCasePipe],
  templateUrl: './bonjour.html',
  styleUrl: './bonjour.css',
})
export class Bonjour {
  nom: string = '';
  police: string = 'Georgia';
  taille: number = 12;
  alignement: string = 'center';

}
