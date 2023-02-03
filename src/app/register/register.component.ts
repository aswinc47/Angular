import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  constructor(private ds:DataService, private router:Router){ }

  ngOnInit(): void {
      
  }

  uname:any
  acno:any
  pass:any

  register(){

  var uname = this.uname
  var acno = this.acno
  var pass = this.pass
  
  const result = this.ds.register(uname,acno,pass)

  if(result){
    alert('Successfully registered')
    this.router.navigateByUrl('')
  }else{
    alert('Already exist')
  }
  }
}
