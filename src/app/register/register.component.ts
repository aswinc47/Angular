import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  constructor(private ds:DataService, private router:Router , private fb:FormBuilder){ }

  ngOnInit(): void {
      
  }

  // create reactive form of register form
  
  registerForm = this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[A-Za-z]+')]],
    acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    pass:['',[Validators.required,Validators.pattern('[A-Za-z0-9]+')]]
  })


  register(){

  var uname = this.registerForm.value.uname
  var acno = this.registerForm.value.acno
  var pass = this.registerForm.value.pass
  
  if(this.registerForm.valid){
    const result = this.ds.register(uname,acno,pass)

    if(result){
      alert('Successfully registered')
      this.router.navigateByUrl('')
    }else{
      alert('Already exist')
    }
  }else{
    alert('Invalid Form')
  }
  }
}
