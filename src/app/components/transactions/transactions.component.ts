import {CommonModule} from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {RouterLink} from '@angular/router';
import {Transaction} from '../../models/transaction.model';
import {TransactionComponent} from '../transaction/transaction.component';



@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, TransactionComponent, RouterLink],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss'
})
export class TransactionsComponent {
  @Input() transactions: Transaction[] = [];
  @Output() removeTransactionEvent = new EventEmitter<string>();

  removeTransaction(id: string) {
    this.removeTransactionEvent.emit(id);
  }
}
