import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit{

  constructor(private router:Router, private ds:DataService, private fb:FormBuilder ){ }

  ngOnInit(): void {
      
  }


  loginForm = this.fb.group({
    acnum:['',[Validators.required,Validators.pattern('[0-9]+')]],
    pass:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
  })

  login(){
   let pass = this.loginForm.value.pass
   let acnum = this.loginForm.value.acnum

   if(this.loginForm.valid){
      const loginResult = this.ds.login(acnum,pass)

      if(loginResult){
      this.router.navigateByUrl("dashboard")
      }else{
      alert("Incorrect account number or password")
   }
   }else{
    alert("Validation error")
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
