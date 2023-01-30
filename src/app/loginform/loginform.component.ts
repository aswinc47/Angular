import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit{

  userDetails: any = {
    1000:{acno:100,username:"anu",password:"abc@12",balance:0},
    1001:{acno:101,username:"amal",password:"abc@12",balance:0},
    1002:{acno:102,username:"ajith",password:"abc@12",balance:0},
    1003:{acno:103,username:"akash",password:"abc@12",balance:0},
  }
  acnum: any;
  pass: any;

  constructor(){ }

  ngOnInit(): void {
      
  }

  login(){
    console.log("working")
  }
  eventInput(event:any){
    this.acnum = event.target.value
    console.log(this.acnum);
  }

  eventPassword(event:any){
    this.pass = event.target.value
    console.log(this.pass)
  }
}

