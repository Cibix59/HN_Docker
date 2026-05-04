import { Component, signal } from '@angular/core';
import { Bonjour } from './bonjour/bonjour';
import { Calculatrice } from './calculatrice/calculatrice';
import { Header } from './header/header';

//Pour acceder aux infos des transactions sur differentes pages
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Bonjour, Calculatrice, Header,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-tp');
}
