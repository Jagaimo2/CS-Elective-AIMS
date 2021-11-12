import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
<<<<<<< Updated upstream
=======
import {HeaderService} from "../../header/header.service";
>>>>>>> Stashed changes

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string = "LOGIN";
  username: string = "";
  password: string = "";

<<<<<<< Updated upstream
  constructor(private route: Router) { }
=======
  constructor(private route: Router, private status: HeaderService) { }
>>>>>>> Stashed changes

  ngOnInit(): void {
  }

  login(){
    if(this.username == "Student"){
      if(this.password == "Test"){

        this.message = "LOGIN SUCCESS!";
<<<<<<< Updated upstream
        setTimeout(()=> {
          this.route.navigateByUrl('/');
        }, 2000);
=======
        this.status.setSignInStatus('SIGNED IN');
        this.status.setSignInMessage('SIGN OUT');

        setTimeout(()=> {
          this.route.navigateByUrl('/');
        }, 1000);
>>>>>>> Stashed changes
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
