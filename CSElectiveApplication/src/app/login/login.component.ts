import { Component, OnInit } from '@angular/core';
import {LoginService} from "./login.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string = "LOGIN";

  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
  }
}
