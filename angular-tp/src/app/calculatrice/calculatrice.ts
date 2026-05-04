import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

// historique
interface Historique {
  heure: Date;
  detail: string;
  resultat: number;
}

@Component({
  selector: 'app-calculatrice',
  standalone: true,
  imports: [FormsModule, DatePipe],
  templateUrl: './calculatrice.html',
  styleUrl: './calculatrice.css'
})
export class Calculatrice {
  nombre1: number = 0;
  nombre2: number = 0;
  operation: string = '+';
  
  // pour l'affichage
  dernierResultat: number | null = null;
  historique: Historique[] = []; 

  calculer() {
    let res = 0;


    switch (this.operation) {
      case '+': res = this.nombre1 + this.nombre2; break;
      case '-': res = this.nombre1 - this.nombre2; break;
      case '*': res = this.nombre1 * this.nombre2; break;
      case '/': 
        if (this.nombre2 === 0) {
          alert("division par zéro ");
          return; 
        }
        res = this.nombre1 / this.nombre2; 
        break;
    }

    this.dernierResultat = res;

    // on place le nouveau calcul au début de l'historique
    this.historique.unshift({
      heure: new Date(),
      detail: `${this.nombre1} ${this.operation} ${this.nombre2}`,
      resultat: res
    });
  }


  effacer(index: number) {
    //retire l'entrée à l'index donné
    this.historique.splice(index, 1);
  }
}