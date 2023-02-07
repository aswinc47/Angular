import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit{

  transactionData:any

  constructor(private ds:DataService){
    this.transactionData = this.ds.getTransaction(this.ds.currentAcno)
    console.log(this.transactionData)
  }

  ngOnInit(): void {
      
  }
}
