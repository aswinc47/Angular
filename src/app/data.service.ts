import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  userDetails: any = {
    1000:{acno:1000,username:"anu",password:"abc@12",balance:0},
    1001:{acno:1001,username:"amal",password:"abc@12",balance:0},
    1002:{acno:1002,username:"ajith",password:"abc@12",balance:0},
    1003:{acno:1003,username:"akash",password:"abc@12",balance:0},
  }

  currentUser:any

  register(uname:any,acno:any,password:any){
    if(acno in this.userDetails){
      return false
    }else{
      this.userDetails[acno] = {acno,username:uname,password}
      console.log(this.userDetails[acno])
      return true
    }
  }

  login(acnum:any,pass:any){
    if(acnum in this.userDetails){
      if(pass == this.userDetails[acnum].password){
        this.currentUser = this.userDetails[acnum].username
        return true
      }else{
        return false
      }
     }else{
      return false
     }
  }
}
