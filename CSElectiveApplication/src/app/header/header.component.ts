import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginStatus = 'NOT SIGNED IN';
  loginMessage = 'SIGN IN';

  constructor() { }

  ngOnInit(): void {
  }

  pageChanged(page: string){
    console.log(`I've changed pages! The current page is ${page}`);
  }
}
