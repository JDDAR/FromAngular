import {CommonModule} from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Transaction} from '../../models/transaction.model';


@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.scss'
})
export class TransactionComponent {
  @Input() transaction!: Transaction;
  @Output() removeTransactionEvent = new EventEmitter<string>()

  removeHandler = () => {
    this.removeTransactionEvent.emit(this.transaction.id);

  }
}
