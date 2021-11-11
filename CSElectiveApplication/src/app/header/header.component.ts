import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginMessage = 'SIGN IN';
  loginStatus: string = 'NOT SIGNED IN';

  constructor() { }

  ngOnInit(): void {
  }

  pageChanged(page: string){
    console.log(`I've changed pages! The current page is ${page}`);
  }
}
