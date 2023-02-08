import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentAcno:any

  constructor() { }

  userDetails: any = {
    1000:{acno:1000,username:"anu",password:"abc12",balance:0,transaction:[]},
    1001:{acno:1001,username:"amal",password:"abc12",balance:0,transaction:[]},
    1002:{acno:1002,username:"ajith",password:"abc12",balance:0,transaction:[]},
    1003:{acno:1003,username:"akash",password:"abc12",balance:0,transaction:[]},
  }

  currentUser:any

  register(uname:any,acno:any,password:any){
    if(acno in this.userDetails){
      return false
    }else{
      this.userDetails[acno] = {acno,username:uname,password,balance:0,transaction:[]}
      console.log(this.userDetails[acno])
      return true
    }
  }

  login(acnum:any,pass:any){
    if(acnum in this.userDetails){
      if(pass == this.userDetails[acnum].password){
        this.currentUser = this.userDetails[acnum].username
        this.currentAcno = acnum
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
