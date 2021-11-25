import { Injectable } from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginStatus: string = 'LOG IN';
  headerStatus: string = 'NOT SIGNED IN';
  signInStatus: string = 'SIGN IN';
  currentUser: any

  constructor(private http: HttpClient, private reroute: Router) { }

  loginAttempt(form: NgForm){
    let formData = new FormData();
    formData.append('email', btoa(form.value.username));
    formData.append('password', btoa(form.value.password));

    this.http.post('http://127.0.0.1:8000/login', formData).subscribe((response: any) => {
      if(response.message == 'login success'){
        this.loginStatus = 'LOGIN SUCCESS';
        this.headerStatus = 'SIGNED IN';
        this.signInStatus = 'SIGN OUT';

        setTimeout(() => {
          this.reroute.navigate(['/'])
        }, 1000);
      }
      else{
        this.loginStatus = 'LOGIN FAILED!';

        setTimeout(() => {
          this.loginStatus = 'LOG IN';
        }, 1000);
      }
    })
  }

  signOut(){
    this.loginStatus = 'LOG IN';
    this.headerStatus = 'NOT SIGNED IN';
    this.signInStatus = 'SIGN IN';
    this.currentUser = null;

    this.reroute.navigate(['/login'])
  }
}
