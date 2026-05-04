import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Transaction {
  private http = inject(HttpClient);

  //liste globale
  getTransactions() {
    return this.http.get<any[]>('../data/transactions.json');
  }

  // détail d'une opération
  getTransactionDetail(id: string) {  
    return this.http.get<any>(`../data/${id}.json`);
  }
}
