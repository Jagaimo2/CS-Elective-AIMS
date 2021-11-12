import {Component, Input, OnInit } from '@angular/core';
import {HeaderService} from "./header.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() loginStatus = '';
  @Input() loginMessage = '';

  constructor(private status: HeaderService) { }

  ngOnInit(): void {
    this.loginMessage = this.status.signInMessage;
    this.loginStatus = this.status.signInStatus;
  }

  pageChanged(page: string){
    console.log(`I've changed pages! The current page is ${page}`);
  }
}
