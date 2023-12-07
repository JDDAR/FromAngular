import {CommonModule} from '@angular/common';
import { Component, OnInit } from '@angular/core';

//models
import { Balance } from '../../models/balance.model';
import {Transaction} from '../../models/transaction.model';

//component

import { BalanceComponent } from '../../components/balance/balance.component';
import {TransactionsComponent} from '../../components/transactions/transactions.component';
import {TransactionsService} from '../../service/transactions.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BalanceComponent, TransactionsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})


export class HomeComponent implements OnInit {

  transactions: Transaction[] = [];

  balance : Balance = {
    amount : 0,
    income : 0,
    expenses : 0
  };

  constructor(private TransactionsService: TransactionsService){}

  ngOnInit(): void {

    this.TransactionsService.get().subscribe((response: Transaction[]) => {
      this.transactions = response;

      this.calculateBalance();
    });
  }

  removeTransaction(id: string){
    this.TransactionsService.remove(id).subscribe((response: Transaction) =>{
      console.log(response)
      this.transactions = this.transactions.filter(transactions => transactions.id != id);

      this.calculateBalance()
    });
  }
  calculateBalance(): void {

    let income: number = 0;
    let expenses: number = 0;

    this.transactions.forEach((transaction) => {
      if(transaction.type === "expense") expenses += transaction.amount;
      if(transaction.type === "income") income += transaction.amount;
    });
    const amount: number = income - expenses;

    this.balance = {
      amount,
      income,
      expenses
    }

  }

}
