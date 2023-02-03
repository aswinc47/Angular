import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit{

  acnum: any;
  pass: any;

  constructor(private router:Router, private ds:DataService){ }

  ngOnInit(): void {
      
  }


  login(){
   let pass = this.pass
   let acnum = this.acnum
   ;
   const loginResult = this.ds.login(acnum,pass)

   if(loginResult){
    this.router.navigateByUrl("dashboard")
   }else{
    alert("Incorrect account number or password")
   }
   
  }


// login(a:any,b:any){
//   let acnum = a.value
//   let pass = b.value
//   let userDetails = this.userDetails
//   ;
  
//   if(acnum in userDetails){
//    if(pass == userDetails[acnum].password){
//      console.log(userDetails[acnum].password)
//      alert("Login successful")
//    }else{
//      alert("Incorrect password")
//    }
//   }else{
//    alert("Account doesnt exist")
//   }
//  }
}
