import { Routes } from '@angular/router';

import {ListeTransactions  } from './liste-transactions/liste-transactions';
import { DetailTransaction } from './detail-transaction/detail-transaction';

export const routes: Routes = [
    // page d'accueil 
    { path: '', component: ListeTransactions },
    // page d'infos sur une transaction
    { path: 'detail/:id', component: DetailTransaction }
];