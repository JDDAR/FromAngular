import {CommonModule} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

//services
import {TransactionsService} from '../../service/transactions.service';
import { Transaction } from '../../models/transaction.model';

@Component({
  selector: 'app-add-transaction',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './add-transaction.component.html',
  styleUrl: './add-transaction.component.scss'
})
export class AddTransactionComponent implements OnInit {

  constructor (
    private TransactionsService: TransactionsService,
    private router: Router
  ) {}


  addTransactionForm!: FormGroup;

  //se ejecuta el montaje en ek DOM Tree
  ngOnInit(): void {
    this.addTransactionForm = new FormGroup({
      amount: new FormControl(0, [
        Validators.required,
        Validators.pattern('^[0-9]+$'),
      ]),
      type: new FormControl('expense', [
        Validators.required,
      ]),
      category: new FormControl('food', [
        Validators.required,
      ]),
      date: new FormControl('2023-12-06',Validators.required),
    });
  }

  onSubmit() {
    if(this.addTransactionForm.valid) {
      const newTransaction = this.addTransactionForm.value;

      this.TransactionsService.create(newTransaction).subscribe((response: Transaction) => {
        console.log(response);
        this.router.navigate(['/']);
      });
    }
  }
}
