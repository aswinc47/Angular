import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  

  constructor() { 
    this.getData()
  }

  // userDetails: any = {
  //   1000:{acno:1000,username:"anu",password:"abc12",balance:0,transaction:[]},
  //   1001:{acno:1001,username:"amal",password:"abc12",balance:0,transaction:[]},
  //   1002:{acno:1002,username:"ajith",password:"abc12",balance:0,transaction:[]},
  //   1003:{acno:1003,username:"akash",password:"abc12",balance:0,transaction:[]},
  // }

  currentUser:any
  currentAcno:any
  userDetails:any

  saveData(){
    if(this.userDetails){
      localStorage.setItem("database",JSON.stringify(this.userDetails))
    }
    if(this.currentUser){
      localStorage.setItem("currentUser",this.currentUser)
    }
    if(this.currentAcno){
      localStorage.setItem("currentAcno",JSON.stringify(this.currentAcno))
    }
  }
  
  removeData(){
    if(this.currentAcno){
      localStorage.removeItem("currentAcno")
    }
    if(this.currentUser){
      localStorage.removeItem("currentUser")
    }
  }

  getData(){
    if(localStorage.getItem('database')){
      this.userDetails = JSON.parse(localStorage.getItem('database') || "")
    }
    if(localStorage.getItem('currentUser')){
      this.currentUser = localStorage.getItem('currentUser')
    }
    if(localStorage.getItem('currentAcno')){
      this.currentAcno = JSON.parse(localStorage.getItem('currentAcno') || "")
    }
  }

  register(uname:any,acno:any,password:any){
    if(acno in this.userDetails){
      return false
    }else{
      this.userDetails[acno] = {acno,username:uname,password,balance:0,transaction:[]}
      this.saveData()
      return true
    }
  }

  login(acnum:any,pass:any){
    if(acnum in this.userDetails){
      if(pass == this.userDetails[acnum].password){
        this.currentUser = this.userDetails[acnum].username
        this.currentAcno = acnum
        this.saveData()
        return true
      }else{
        return false
      }
     }else{
      return false
     }
  }

  deposit(acnum:any,password:any,amount:any){
    let userDetails = this.userDetails
    var amnt = parseInt(amount)

    if(acnum in userDetails){
      if(password == userDetails[acnum]["password"]){
        userDetails[acnum]["balance"] += amnt
        //store transaction data
        userDetails[acnum]["transaction"].push({Type:"Credit",amount:amnt})

        console.log(userDetails)
        this.saveData()

        return userDetails[acnum]["balance"]
      }else{
        return false
      }
    }else{
      return false
    }
  }

  withdraw(acnum:any,password:any,amount:any){
    let userDetails = this.userDetails
    var amnt = parseInt(amount)

    if(acnum in userDetails){
      if(password == userDetails[acnum]["password"]){
        if(amnt <= userDetails[acnum]["balance"]){
          userDetails[acnum]["balance"] -= amnt
          userDetails[acnum]["transaction"].push({Type:"Debit",amount:amnt})

          console.log(userDetails)
          this.saveData()

          return userDetails[acnum]["balance"]
        }else{
          alert('Insufficient Balance')
          return false
        }
      }else{
        alert('Incorrect Password')
        return false
      }
    }else{
      alert('Account number does not exist')
      return false
    }
  }

  getTransaction(acno:any){
    return this.userDetails[acno]["transaction"]
  }
}
