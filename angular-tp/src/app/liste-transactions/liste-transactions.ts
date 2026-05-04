import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Transaction } from '../services/transaction';

@Component({
  selector: 'app-liste-transactions',
  imports: [CommonModule, RouterModule],
  templateUrl: './liste-transactions.html',
  styleUrl: './liste-transactions.css',
})
export class ListeTransactions {
  //liste des transactions, utilise un signal pour eviter les erreurs de sycnrho
  transactions = signal<any[]>([]);
  ordreAscendant = true;    // Pour savoir dans quel sens trier

  //pour acceder aux infos des transactions 
  private transactionService = inject(Transaction);

  ngOnInit() {
    // appelle du service abonnement pour recevoir la reponse
    this.transactionService.getTransactions().subscribe((donnees) => {
      this.transactions.set(donnees);
    });
  }


  trier(critere: string) {
    this.ordreAscendant = !this.ordreAscendant;

    // copie du tableau pour le trier sans modifier l'original
    let data = this.transactions().slice();
    let ascendant = this.ordreAscendant;

    data.sort(function (a, b) {
      let valA = a[critere];
      let valB = b[critere];

      if (ascendant === true) {
        //  tri croissant

        if (valA < valB) {
          return -1;
        } else if (valA > valB) {
          return 1;
        } else {
          return 0;
        }

      } else {
        // tri décroissant

        if (valA < valB) {
          return 1;
        } else if (valA > valB) {
          return -1;
        } else {
          return 0;
        }

      }
    });

    // MaJ des transactions avec le tableau trié
    this.transactions.set(data);
  }
}
