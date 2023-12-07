import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Transaction} from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  url: string = "http://localhost:3000/transactions"

  constructor(private httpClient: HttpClient) { }


  public get(): Observable <Transaction[]> {
    return this.httpClient.get<Transaction[]>(this.url)
  }

  public create(transaction: Transaction): Observable<Transaction> {
    return this.httpClient.post<Transaction>(this.url, transaction)
  }

  public remove(id: string) : Observable<Transaction>{
    return this.httpClient.delete<Transaction>(`${this.url}/${id}`)
  }

}
