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
  deposit:any
  acnum2:any
  pass2:any
  withdraw:any

  constructor(private ds:DataService){
    
  }
  ngOnInit(): void {
    
  }



}
