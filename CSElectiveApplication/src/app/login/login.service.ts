import { Injectable } from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {UserModel} from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  path = 'http://192.168.100.99:8000';
  isLoggedIn = false;
  loginStatus: string = 'LOG IN';
  headerStatus: string = 'NOT SIGNED IN';
  signInStatus: string = 'SIGN IN';
  currentUser: any;

  constructor(private http: HttpClient, private reroute: Router) { }

  loginAttempt(form: NgForm){
    let formData = new FormData();
    formData.append('email', btoa(form.value.username));
    formData.append('password', btoa(form.value.password));

    this.http.post(`${this.path}/login`, formData).subscribe((response: any) => {
      if(response.message == 'login success'){
        this.loginStatus = 'LOGIN SUCCESS';
        this.headerStatus = 'SIGNED IN';
        this.signInStatus = 'SIGN OUT';
        this.isLoggedIn = true;

        let id = atob(response.user.id);
        let firstName = atob(response.user.first_name);
        let lastName = atob(response.user.last_name);
        let course = atob(response.user.course);
        let yearblock = atob(response.user.yearLevelandBlock);
        let studentCategory = atob(response.user.studentCategory);

        let loggedUser = new UserModel(id, firstName, lastName, course, yearblock, studentCategory);
        this.currentUser = loggedUser;

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
    this.isLoggedIn = true;

    this.reroute.navigate(['/login'])
  }

  getLogin(){
    const promise = new Promise((resolve, reject) => {
      resolve(this.isLoggedIn);
    });

    return promise;
  }
}
