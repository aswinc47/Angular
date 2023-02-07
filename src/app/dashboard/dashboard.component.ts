import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  acnum1:any
  pass1:any
  deposit1:any
  acnum2:any
  pass2:any
  withdraw1:any

  constructor(private ds:DataService){
    
  }
  ngOnInit(): void {
    
  }

  deposit(){
    var acnum1 = this.acnum1
    var pass1 = this.pass1
    var deposit1 = this.deposit1

    const result = this.ds.deposit(acnum1,pass1,deposit1)
    if(result){
      alert(`Credited : ${deposit1} \n Balance : ${result}`)
    }else{
      alert(`Incorrect Username or password`)
    }
  }

  withdraw(){
    var acnum2 = this.acnum2
    var pass2 = this.pass2
    var withdraw1 = this.withdraw1

    const result = this.ds.withdraw(acnum2,pass2,withdraw1)
    if(result){
      alert(`Debited : ${withdraw1} \n Balance : ${result}`)
    }
  }
}
