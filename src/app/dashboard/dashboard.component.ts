import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentUser = this.ds.currentUser

  acnum1:any
  pass1:any
  deposit1:any
  acnum2:any
  pass2:any
  withdraw1:any
  acno:any

  accessdate:any

  constructor(private ds:DataService, private fb:FormBuilder, private router:Router ){
    this.accessdate = new Date()
    console.log(typeof(this.accessdate))
  }
  ngOnInit(): void {
    if(!localStorage.getItem("currentAcno")){
      alert('Please login')
      this.router.navigateByUrl("")
    }
  }

  dateEdit(date:string){
    const newDate = date.split(" ").length = 1
    console.log(newDate)
    return newDate
  }

  depositForm = this.fb.group({
    acnum1:['',[Validators.required,Validators.pattern('[0-9]+')]],
    pass1:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]],
    deposit1:['',[Validators.required,Validators.pattern('[0-9]+')]],
  })

  withdrawForm = this.fb.group({
    acnum2:['',[Validators.required,Validators.pattern('[0-9]+')]],
    pass2:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]],
    withdraw1:['',[Validators.required,Validators.pattern('[0-9]+')]]
  })

  deposit(){
    var acnum1 = this.depositForm.value.acnum1
    var pass1 = this.depositForm.value.pass1
    var deposit1 = this.depositForm.value.deposit1

    if(this.depositForm.valid){
      const result = this.ds.deposit(acnum1,pass1,deposit1)
      if(result){
        alert(`Credited : ${deposit1} \n Balance : ${result}`)
      }else{
        alert(`Incorrect Username or password`)
      }
    }else{
      alert('Invalid input')
    }

  }
  
  deleteParent(){
    this.acno = JSON.parse(localStorage.getItem("currentAcno") || '')
  }
  
  logout(){
    this.ds.removeData()
    this.router.navigateByUrl("/")
  }
  
  cancel(){
    this.acno = ''
  }

  withdraw(){
    var acnum2 = this.withdrawForm.value.acnum2
    var pass2 = this.withdrawForm.value.pass2
    var withdraw1 = this.withdrawForm.value.withdraw1

    if(this.withdrawForm.valid){
      const result = this.ds.withdraw(acnum2,pass2,withdraw1)
      if(result){
        alert(`Debited : ${withdraw1} \n Balance : ${result}`)
      }else{
        alert('Incorrect Username or password')
      }
    }else{
      alert('Invalid input')
    }

  }
}
