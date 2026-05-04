import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from '../services/transaction';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-detail-transaction',
  imports: [DatePipe],
  templateUrl: './detail-transaction.html',
  styleUrl: './detail-transaction.css',
})
export class DetailTransaction {

  detail = signal<any>(null);

  //pour acceder à l'id dans l'url
  private route = inject(ActivatedRoute);
  //pour acceder aux infos des transactions 
  private transactionService = inject(Transaction);

  ngOnInit() {
    //recuperation de l'id dans l'url
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      // appel le service pour recuperer le detail
      this.transactionService.getTransactionDetail(id).subscribe({
        next: (donnees) => {
          // MaJ du signal
          this.detail.set(donnees);
        }
      });
    }
  }
}
