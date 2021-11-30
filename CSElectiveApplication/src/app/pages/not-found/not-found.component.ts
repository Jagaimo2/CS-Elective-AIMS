import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  countdown: number = 5;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.countDown();
  }

  countDown(){
    if(this.countdown > 0){
      setTimeout(() => {
        this.countdown--;
        this.countDown()
      }, 1000);
    }
    else{
      this.router.navigate(['/']);
    }
  }
}
