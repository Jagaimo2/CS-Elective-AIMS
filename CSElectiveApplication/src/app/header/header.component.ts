<<<<<<< Updated upstream
import {Component, OnInit, Output} from '@angular/core';
=======
import {Component, Input, OnInit } from '@angular/core';
import {HeaderService} from "./header.service";
>>>>>>> Stashed changes

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

<<<<<<< Updated upstream
  loginMessage = 'SIGN IN';
  loginStatus: string = 'NOT SIGNED IN';
=======
  @Input() loginStatus = '';
  @Input() loginMessage = '';
>>>>>>> Stashed changes

  constructor(private status: HeaderService) { }

  ngOnInit(): void {
    this.loginMessage = this.status.signInMessage;
    this.loginStatus = this.status.signInStatus;
  }

  pageChanged(page: string){
    console.log(`I've changed pages! The current page is ${page}`);
  }
}
