import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string = "LOGIN";
  username: string = "";
  password: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  checkValues(){
    if(this.username == "Student"){
      if(this.password == "Test"){
        this.message = "LOGIN SUCCESS!";
      }
      else{
        this.message = "INCORRECT PASSWORD!"
        setTimeout(()=> this.message = "LOGIN", 2000);
      }
    }
    else{
      this.message = "INVALID USER!"
      setTimeout(()=> this.message = "LOGIN", 2000);
    }
  }
}
